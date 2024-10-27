import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <h1>A CALL TO ACTION!</h1>
            <p>When disaster strikes, we’re here to bring people together.</p>
            <div className="buttons">
                <Link to="/get-involved" className="btn">Seek Refuge</Link>
                <Link to="/get-involved" className="btn">Offer Refuge</Link>
            </div>
        </div>
    );
};

export default Hero;
