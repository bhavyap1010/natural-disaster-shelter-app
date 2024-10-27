import React from 'react';
import './Partners.css';
import partnersImage from '../images/partners.png'; 

const Partners = () => {
    return (
        <>
            <div className="partners">
                <div className="partners-text">
                    <h2>OUR SUPPORTIVE ALLIES</h2>
                    <p>
                        We extend our heartfelt gratitude to our partners for their unwavering support of React Relief. Together, we are making a meaningful impact by connecting individuals in need with compassionate hosts, creating a safer and more resilient community during times of crisis.
                    </p>
                </div>
                <img src={partnersImage} alt="Partners" className="partners-image" />
            </div>
        </>
    );
};

export default Partners;
