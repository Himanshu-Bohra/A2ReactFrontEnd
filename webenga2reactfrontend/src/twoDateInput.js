import React, { useState } from 'react';

function StartDateEndDateInput({ onDateSubmit }) {
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');

    // Get today's date
    const today = new Date();
    // Get YYYY-MM-DD format
    const todayISO = today.toISOString().split('T')[0]; 

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!dateStart || !dateEnd) {
            console.error('Please select both start and end dates.');
            return;
        } else {
            onDateSubmit(dateStart, dateEnd);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid white' }}>
            <span style={{ color: 'white' }}>START DATE: </span>
            <input
                type="date"
                value={dateStart}
                onChange={(e) => setDateStart(e.target.value)}
                // Set default value as today's date
                defaultValue={todayISO} 
            />
            <br />
            <span style={{ color: 'white' }}>END DATE: </span>
            <input
                type="date"
                value={dateEnd}
                onChange={(e) => setDateEnd(e.target.value)}
                // Set default value to today's date
                defaultValue={todayISO} 
            />

            <button type="submit">Submit</button>
        </form>
    );
}

export default StartDateEndDateInput;
