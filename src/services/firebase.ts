import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// IMPORTANT: Replace with your live Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAel5v4s2rnq1AzlTNWKH4pH0huRKDNmmI",
    authDomain: "ietinstitute-7af5b.firebaseapp.com",
    projectId: "ietinstitute-7af5b",
    storageBucket: "ietinstitute-7af5b.firebasestorage.app",
    messagingSenderId: "152204797998",
    appId: "1:152204797998:web:c1f3236bc981d026add7bf",
    measurementId: "G-XL6EC2HZPP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Mock data service fallbacks
export interface Course {
    id?: string;
    name: string;
    category: string;
    level: 'UG' | 'PG';
    duration: string;
    eligibility: string;
}

export const getCourses = async () => {
    // In a real app: return (await getDocs(collection(db, "courses"))).docs.map(doc => doc.data());
    return [
        { name: 'B.C.A.', level: 'UG' },
        { name: 'M.B.A.', level: 'PG' }
    ];
};

import { collection, getDocs } from "firebase/firestore";

export const fetchAllCourses = async (): Promise<Course[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Course));
    } catch (error) {
        console.error("Error fetching courses: ", error);
        return [];
    }
};
