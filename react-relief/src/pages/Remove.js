import React, { useState } from 'react';
import axios from 'axios';
import './Remove.css';

const AIRTABLE_API_KEY = 'pat2AVlJ1l5lyJzpR.bef90fc2a899a44b1d17191ec41d3925024fd4e6abc044afd61b80cfd5e27f43';
const BASE_ID = 'appZRNWf4GOcgwlPO';
const TABLE_NAME = 'Providers';

const Remove = () => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleRemove = async () => {
        try {
            const response = await axios.get(
                `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
                {
                    headers: {
                        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    },
                    params: {
                        filterByFormula: `AND({ID} = '${id}', {Email} = '${email}')`,
                    },
                }
            );

            const records = response.data.records;

            if (records.length === 0) {
                setMessage('No matching entry found.');
                return;
            }

            const recordId = records[0].id;
            await axios.delete(
                `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}/${recordId}`,
                {
                    headers: {
                        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
                    },
                }
            );

            setMessage('Entry successfully removed.');
        } catch (error) {
            console.error('Error removing entry:', error);
            setMessage('Failed to remove entry. Please try again.');
        }
    };

    return (
        <div className="remove">
            <h2>Remove Provider Entry</h2>
            <input
                type="text"
                placeholder="Enter ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleRemove}>Remove</button>
            <p>{message}</p>
        </div>
    );
};

export default Remove;