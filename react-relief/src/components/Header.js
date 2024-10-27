import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" style={{ width: '40px', height: 'auto', marginRight: '15px' }} />
            <h1>React Relief</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/get-involved" className="btn">Get Involved</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
