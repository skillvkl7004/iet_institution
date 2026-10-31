import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div>
                    <h3>IET Institute</h3>
                    <p>Distance and Online Education for a brighter future.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</Link></li>
                        <li><Link to="/universities" style={{ color: 'white', textDecoration: 'none' }}>Universities</Link></li>
                        <li><Link to="/enquiry" style={{ color: 'white', textDecoration: 'none' }}>Enquiry Now</Link></li>
                        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contact Info</h4>
                    <p>Email: infoietinstitute@gmail.com</p>
                    <p>Phone: +91 9944477004</p>
                    <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>348/5, Nandu Towers, Vellakovil, Tiruppur - 638111.</p>
                </div>
            </div>
            <div className="container" style={{ marginTop: '2rem', borderTop: '1px solid #ffffff33', paddingTop: '1rem', textAlign: 'center' }}>
                <p>&copy; {new Date().getFullYear()} IET Institute. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
