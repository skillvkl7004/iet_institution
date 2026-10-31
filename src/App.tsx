import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Universities from './pages/Universities';
import About from './pages/About';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
