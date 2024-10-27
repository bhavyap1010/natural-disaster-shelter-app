import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {
    const location = useLocation();

    // the following will scroll the page to the top, when you click a button
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <header className="header">
            <img src={logo} alt="Logo" className='logo-image' />
            <h1>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    React Relief
                </Link>
            </h1>
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
