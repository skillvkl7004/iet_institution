import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db, fetchAllCourses, type Course } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Send, CheckCircle } from 'lucide-react';

const Enquiry: React.FC = () => {
    const [searchParams] = useSearchParams();
    const courseFromUrl = searchParams.get('course');

    const [courses, setCourses] = useState<Course[]>([]);
    const [loadingCourses, setLoadingCourses] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchAllCourses();
                setCourses(data);

                // If course from URL exists, set it in form
                if (courseFromUrl) {
                    setFormData(prev => ({ ...prev, course: decodeURIComponent(courseFromUrl) }));
                }
            } catch (err) {
                console.error("Error loading courses for enquiry:", err);
            } finally {
                setLoadingCourses(false);
            }
        };

        loadCourses();
    }, [courseFromUrl]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await addDoc(collection(db, 'enquiries'), {
                ...formData,
                timestamp: serverTimestamp()
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', course: '', message: '' });
        } catch (error) {
            console.error('Error adding document: ', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (status === 'success') {
        return (
            <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <CheckCircle size={80} color="#28a745" style={{ marginBottom: '2rem' }} />
                <h1 style={{ color: 'var(--primary-color)' }}>Thank You!</h1>
                <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => setStatus('idle')}>Send Another Enquiry</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '2rem' }}>Admission Enquiry</h1>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
                        />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email ID</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="9944477004"
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
                            />
                        </div>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Select Course</label>
                        <select
                            name="course"
                            required
                            value={formData.course}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
                            disabled={loadingCourses}
                        >
                            <option value="">{loadingCourses ? 'Loading courses...' : '-- Choose Course --'}</option>
                            {!loadingCourses && (
                                <>
                                    {courses.filter(c => c.level === 'UG').length > 0 && (
                                        <optgroup label="Undergraduate (UG)">
                                            {courses.filter(c => c.level === 'UG').map(course => (
                                                <option key={course.id} value={course.name}>{course.name}</option>
                                            ))}
                                        </optgroup>
                                    )}
                                    {courses.filter(c => c.level === 'PG').length > 0 && (
                                        <optgroup label="Postgraduate (PG)">
                                            {courses.filter(c => c.level === 'PG').map(course => (
                                                <option key={course.id} value={course.name}>{course.name}</option>
                                            ))}
                                        </optgroup>
                                    )}
                                    {/* Fallback for courses without levels or other levels */}
                                    {courses.filter(c => c.level !== 'UG' && c.level !== 'PG').length > 0 && (
                                        <optgroup label="Other Courses">
                                            {courses.filter(c => c.level !== 'UG' && c.level !== 'PG').map(course => (
                                                <option key={course.id} value={course.name}>{course.name}</option>
                                            ))}
                                        </optgroup>
                                    )}
                                </>
                            )}
                        </select>
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Any Message (Optional)</label>
                        <textarea
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your questions or comments..."
                            style={{ width: '100%', padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={status === 'loading'}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
                    >
                        {status === 'loading' ? 'Submitting...' : <><Send size={18} /> Submit Enquiry</>}
                    </button>
                    {status === 'error' && <p style={{ color: 'red', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
                </form>
            </div>
        </div>
    );
};

export default Enquiry;
