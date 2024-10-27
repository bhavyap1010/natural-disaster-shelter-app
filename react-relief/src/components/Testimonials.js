// Testimonials.js
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';
import survivor1 from '../images/survivor1.jpg';
import survivor2 from '../images/survivor2.jpg';
import survivor3 from '../images/survivor3.jpg';

const Testimonials = () => {
    return (
        <>
            <div className="red-block"></div>
            <div className="testimonials">
                <h2>VOICES OF GRATITUDE</h2>

                <div className="flexbox-container">
                    <div className="card">
                        <img src={survivor1} className="card-img-top" alt="Survivor 1" />
                        <div className="card-body">
                            <p className="card-text">"React Relief was our beacon of hope. Their platform helped us find a safe home when we needed it most. We are forever grateful!"</p>
                            <p>~ Anonymous</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={survivor2} className="card-img-top" alt="Survivor 2" />
                        <div className="card-body">
                            <p className="card-text">"React Relief connected me with a caring host when I needed it most during my pregnancy. I’m forever grateful for their support!"</p>
                            <p>~ Sara Haider</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={survivor3} className="card-img-top" alt="Survivor 3" />
                        <div className="card-body">
                            <p className="card-text">"As hosts, we came together through React Relief to offer support and safety. It’s been a rewarding experience to help those in need!"</p>
                            <p>~ The Anderson Group</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
