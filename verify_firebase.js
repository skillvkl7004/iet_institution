import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const db = getFirestore(app);

async function checkData() {
    try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        console.log("Found " + querySnapshot.size + " documents");
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", JSON.stringify(doc.data(), null, 2));
        });
    } catch (e) {
        console.error("Error fetching data: ", e);
    }
}

checkData();
