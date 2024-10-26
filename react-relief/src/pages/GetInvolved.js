import React, { useState } from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
    const [showSeeker, setShowSeeker] = useState(true);

    const handleToggle = () => {
        setShowSeeker(!showSeeker);
    };

    return (
        <div className="get-involved">
            <div className="toggle-buttons">
                <button
                    className={`toggle-button ${showSeeker ? 'active' : ''}`}
                    onClick={handleToggle}
                >
                    {showSeeker ? 'Providing Shelter?' : 'Seeking Shelter?'}
                </button>
            </div>
            
            {showSeeker ? (
                <iframe
                    className="airtable-involved-embed seeker-form"
                    src="https://airtable.com/embed/appZRNWf4GOcgwlPO/shrum0ocAy40flSdX"
                    style={{ background: 'transparent', border: '0px' }}
                    title="Seeker Airtable Embed"
                ></iframe>
            ) : (
                <iframe
                    className="airtable-involved-embed provider-form"
                    src="https://airtable.com/embed/appZRNWf4GOcgwlPO/shr1qc6X2ru6VaSNN"
                    style={{ background: 'transparent', border: '0px' }}
                    title="Provider Airtable Embed"
                ></iframe>
            )}
        </div>
    );
};

export default GetInvolved;