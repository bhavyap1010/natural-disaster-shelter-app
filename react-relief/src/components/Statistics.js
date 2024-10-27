import React from 'react';
import './Statistics.css';
import image1 from '../images/stats1.png'; 
import image2 from '../images/stats2.jpeg';
import image3 from '../images/stats3.png'; 

const Statistics = () => {
    return (
        <>
            <div className="red-block"></div>
            <div className="statistics">
                <h2>IMPACT AT A GLANCE</h2>
                <div className="images-container">
                    <div className="left-image">
                        <img src={image1} alt="Stats Image 1" />
                    </div>
                    <div className="right-images">
                        <img src={image2} alt="Stats Image 2" className="top-right-image" />
                        <img src={image3} alt="Stats Image 3" className="bottom-right-image" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;
