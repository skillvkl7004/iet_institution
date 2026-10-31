import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllCourses, type Course } from '../services/firebase';
import { GraduationCap, BookOpen, Award, Briefcase, Loader2, AlertCircle } from 'lucide-react';

const Courses: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeLevels, setActiveLevels] = useState<{ [key: string]: 'UG' | 'PG' }>({});

    const categories = [
        { id: 'eng', name: 'Engineering Courses', icon: <GraduationCap size={24} /> },
        { id: 'arts', name: 'Arts & Science Courses', icon: <BookOpen size={24} /> },
        { id: 'dip', name: 'Diplomo/ITI Courses', icon: <Award size={24} /> },
        { id: 'bank', name: 'Banking / Airport Courses', icon: <Briefcase size={24} /> }
    ];

    useEffect(() => {
        const loadCourses = async () => {
            try {
                const data = await fetchAllCourses();
                setCourses(data);
                // Initialize default level for each category
                const initialLevels: { [key: string]: 'UG' | 'PG' } = {};
                categories.forEach(cat => {
                    initialLevels[cat.name] = 'UG';
                });
                setActiveLevels(initialLevels);
            } catch (err) {
                setError('Failed to load courses. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        loadCourses();
    }, []);

    const handleLevelChange = (category: string, level: 'UG' | 'PG') => {
        setActiveLevels(prev => ({ ...prev, [category]: level }));
    };

    if (loading) {
        return (
            <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <Loader2 className="animate-spin" size={48} color="var(--primary-color)" style={{ margin: '0 auto' }} />
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'var(--gray)' }}>Loading courses...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <AlertCircle size={48} color="red" style={{ margin: '0 auto' }} />
                <p style={{ marginTop: '1rem', fontSize: '1.2rem', color: 'red' }}>{error}</p>
                <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem' }}>Our Courses</h1>
            <p style={{ textAlign: 'center', color: 'var(--gray)', marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
                Discover a wide range of Undergraduate and Postgraduate programs designed to help you achieve your career goals.
            </p>

            {categories.map((category) => {
                const filteredCourses = courses.filter(c =>
                    c.category === category.name && c.level === activeLevels[category.name]
                );

                return (
                    <section key={category.id} style={{ marginBottom: '5rem' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '2px solid var(--primary-color)',
                            paddingBottom: '1rem',
                            marginBottom: '2rem',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <div style={{
                                    background: 'var(--primary-color)',
                                    color: 'white',
                                    padding: '0.5rem',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {category.icon}
                                </div>
                                <h2 style={{ color: 'var(--primary-color)', margin: 0 }}>{category.name}</h2>
                            </div>

                            <div style={{ display: 'flex', background: '#eee', padding: '0.3rem', borderRadius: '8px' }}>
                                <button
                                    onClick={() => handleLevelChange(category.name, 'UG')}
                                    style={{
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '6px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: activeLevels[category.name] === 'UG' ? 'var(--primary-color)' : 'transparent',
                                        color: activeLevels[category.name] === 'UG' ? 'white' : 'var(--text-color)',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    UG
                                </button>
                                <button
                                    onClick={() => handleLevelChange(category.name, 'PG')}
                                    style={{
                                        padding: '0.5rem 1.5rem',
                                        borderRadius: '6px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        backgroundColor: activeLevels[category.name] === 'PG' ? 'var(--primary-color)' : 'transparent',
                                        color: activeLevels[category.name] === 'PG' ? 'white' : 'var(--text-color)',
                                        fontWeight: 'bold',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    PG
                                </button>
                            </div>
                        </div>

                        <div className="grid">
                            {filteredCourses.length > 0 ? (
                                filteredCourses.map((course) => (
                                    <div key={course.id} className="card">
                                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem', minHeight: '3.5rem' }}>{course.name}</h3>
                                        <div style={{ fontSize: '0.95rem', color: 'var(--gray)' }}>
                                            <p style={{ marginBottom: '0.5rem' }}>
                                                <strong style={{ color: 'var(--text-color)' }}>Duration:</strong> {course.duration}
                                            </p>
                                            <p style={{ marginBottom: '1.5rem' }}>
                                                <strong style={{ color: 'var(--text-color)' }}>Eligibility:</strong> {course.eligibility}
                                            </p>
                                        </div>
                                        <div>
                                            <Link to={`/enquiry?course=${encodeURIComponent(course.name)}`} className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                                                Enquire Now
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', background: '#f9f9f9', borderRadius: '10px' }}>
                                    <p style={{ color: 'var(--gray)' }}>No {activeLevels[category.name]} courses available in this category yet.</p>
                                </div>
                            )}
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default Courses;
