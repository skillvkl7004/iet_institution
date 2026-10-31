import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="IET INSTITUTE LOGO" className="nav-logo" />
                </Link>
                <ul className="nav-links">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/courses" className="nav-link">Courses</Link></li>
                    <li><Link to="/universities" className="nav-link">Universities</Link></li>
                    <li><Link to="/about" className="nav-link">About Us</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
