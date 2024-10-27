import React from 'react';
import './Resources.css';
import ready from '../images/ready.png';
import ammo from '../images/ammo.png';
import vice from '../images/vice.jpg';

const Resources = () => {
    return (
        <div className="resources">
            {/* First */}
            <div className="resource-block">
                <a href="https://ammo.com/articles/why-prepare-for-a-disaster" target="_blank" rel="noopener noreferrer">
                    <img src={ammo} alt="Essential Disaster Prep Guides" className="image" />
                </a>
                <div className="content">
                    <h2>ESSENTIAL DISASTER PREP GUIDES</h2>
                    <p>
                        Stay one step ahead with our comprehensive guides on getting ready for natural disasters.
                        Whether you're facing a hurricane, wildfire, flood, or earthquake, these resources will help
                        you prepare your home, family, and community for whatever comes your way. Explore our expert
                        tips and practical advice to ensure you're equipped to handle emergencies with confidence and care.
                    </p>
                </div>
            </div>

            {/* Second */}
            <div className="resource-block reverse">
                <div className="content">
                    <h2>PROACTIVE DISASTER PREPAREDNESS</h2>
                    <p>
                    Be proactive in safeguarding yourself and your loved ones with our extensive resources for disaster preparedness. From hurricanes and wildfires to floods and earthquakes, we provide essential guidance on how to ready your home, family, and community. Discover our expert insights and actionable tips to empower you to face emergencies with confidence and compassion.
                    </p>
                </div>
                <a href="https://www.ready.gov/kit" target="_blank" rel="noopener noreferrer">
                    <img src={ready} alt="Get Ready for Emergencies" className="image" />
                </a>
            </div>

            {/* Third */}
            <div className="resource-block">
                <a href="https://www.vice.com/en/article/hosting-a-refugee-876/" target="_blank" rel="noopener noreferrer">
                    <img src={vice} alt="Know Your Resources" className="image" />
                </a>
                <div className="content">
                    <h2>READY FOR THE UNEXPECTED</h2>
                    <p>
                    Prepare for the unexpected with our in-depth guides on natural disaster readiness. Whether it's a hurricane, wildfire, flood, or earthquake, our resources are designed to help you secure your home, support your family, and strengthen your community. Dive into our expert recommendations and practical strategies to equip yourself for emergencies, ensuring you can respond with assurance and empathy.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resources;
