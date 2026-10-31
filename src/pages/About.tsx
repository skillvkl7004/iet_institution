import React from 'react';

const About: React.FC = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div>
                    <h1 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>About IET Institute</h1>
                    <p style={{ marginBottom: '1rem' }}>
                        IET Institute (Distance and Online Education) is a premier portal dedicated to bridging the gap between quality education and aspiring students across the nation.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        Our mission is to provide accessible, affordable, and flexible learning solutions through partnerships with top-tier universities. We believe that distance should never be a barrier to dreams.
                    </p>
                    <div style={{ marginTop: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>✓</div>
                            <p>10+ Leading University Partners</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>✓</div>
                            <p>50+ UG & PG Programs</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                            <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold' }}>✓</div>
                            <p>Dedicated Career Counseling</p>
                        </div>
                    </div>
                </div>
                <div style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    borderRadius: '20px',
                    boxShadow: 'var(--shadow)'
                }}>
                </div>
            </div>
        </div>
    );
};

export default About;
