import React from 'react';
import { useEffect } from 'react';
import './Testimonials.css';
import survivor1 from '../images/survivor1.jpg';
import survivor2 from '../images/survivor2.jpg';
import survivor3 from '../images/survivor3.jpg';

const testimonialsData = [
    {
        img: survivor1,
        text: `"React Relief was our beacon of hope. Their platform helped us find a safe home when we needed it most. We are forever grateful!"`,
        author: "~ Anonymous"
    },
    {
        img: survivor2,
        text: `"React Relief connected me with a caring host when I needed it most during my pregnancy. I’m forever grateful for their support!"`,
        author: "~ Sara Haider"
    },
    {
        img: survivor3,
        text: `"As hosts, we came together through React Relief to offer support and safety. It’s been a rewarding experience to help those in need!"`,
        author: "~ The Anderson Group"
    }
];

const Testimonials = () => {
    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', 'blue'); // Adjust color dynamically if needed
    }, []);

    return (
        <>
            <div className="red-block"></div>
            <div className="testimonials">
                <h2>VOICES OF GRATITUDE</h2>
                <div className="flexbox-container">
                    {testimonialsData.map((testimonial, index) => (
                        <div className="card" key={index}>
                            <img src={testimonial.img} className="card-img-top" alt={`Survivor ${index + 1}`} />
                            <div className="card-body">
                                <p className="card-text">{testimonial.text}</p>
                                <p>{testimonial.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Testimonials;
