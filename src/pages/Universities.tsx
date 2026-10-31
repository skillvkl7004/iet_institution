import React from 'react';

const Universities: React.FC = () => {
    const universities = [
        { name: 'University of Rajasthan', logo: '🌐', type: 'State University' },
        { name: 'Manipal University', logo: '🏢', type: 'Private University' },
        { name: 'Indira Gandhi National Open University', logo: '📖', type: 'Central University' },
        { name: 'Amity University', logo: '🎓', type: 'Global University' },
    ];

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '1rem' }}>Affiliated Universities</h1>
            <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--gray)' }}>Partnering with the finest institutions to provide global education.</p>

            <div className="grid">
                {universities.map((uni, index) => (
                    <div key={index} className="card" style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{uni.logo}</div>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{uni.name}</h3>
                        <p className="badge" style={{
                            display: 'inline-block',
                            padding: '0.2rem 0.8rem',
                            backgroundColor: '#e6f0ff',
                            borderRadius: '20px',
                            fontSize: '0.8rem',
                            color: 'var(--primary-color)'
                        }}>{uni.type}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Universities;
