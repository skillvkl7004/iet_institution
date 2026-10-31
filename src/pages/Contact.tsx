import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ textAlign: 'center', color: 'var(--primary-color)', marginBottom: '3rem' }}>Contact Us</h1>

            <div className="grid">
                <div className="card">
                    <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Your Name" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }} />
                        <input type="email" placeholder="Your Email" style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }} />
                        <select style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}>
                            <option>Select Course</option>
                            <option>B.A.</option>
                            <option>B.C.A.</option>
                            <option>M.B.A.</option>
                        </select>
                        <textarea placeholder="Your Message" rows={4} style={{ padding: '0.8rem', borderRadius: '5px', border: '1px solid #ddd' }}></textarea>
                        <button className="btn btn-primary" type="button">Send Message</button>
                    </form>
                </div>

                <div>
                    <div className="card" style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Phone color="var(--primary-color)" />
                            <div>
                                <h4>Phone</h4>
                                <p>+91 9944477004</p>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Mail color="var(--primary-color)" />
                            <div>
                                <h4>Email</h4>
                                <p>infoietinstitute@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <MapPin color="var(--primary-color)" />
                            <div>
                                <h4>Head Office</h4>
                                <p style={{ fontSize: '0.9rem' }}>
                                    348/5, Nandu Towers, 2nd Floor,<br />
                                    Karur - Coimbatore Main Road,<br />
                                    Vellakovil, Tiruppur, Tamilnadu - 638111.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ marginTop: '1rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <MapPin color="var(--primary-color)" />
                            <div>
                                <h4>Our Branches</h4>
                                <p style={{ fontSize: '0.9rem' }}>
                                    Tiruppur, Erode, Perundurai, Dharapuram, Pollachi, Madurai, Salem
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
