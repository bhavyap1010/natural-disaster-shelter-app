import React from 'react';
import './Mission.css';
import missionImage from '../images/mission.jpg'; // Update with the correct image path

const Mission = () => {
    return (
        <>
            <div className="red-block"></div>
            <div className="mission">
                <img src={missionImage} alt="Mission" className="mission-image" />
                <div className="mission-text">
                    <h2>MISSION</h2>
                    <p>
                        React Relief connects those seeking refuge during natural disasters with compassionate hosts, fostering community support and ensuring that no one faces hardship alone.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Mission;
