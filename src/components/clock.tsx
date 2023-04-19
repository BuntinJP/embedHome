import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const ticker = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(ticker);
    }, []);

    return (
        <div>
            <h1>Clock:</h1>
            <div className="clock">
                <p>Date: {time.toDateString()}</p>
                <p>Time: {time.toLocaleString()}</p>
            </div>
        </div>
    );
};

export default Clock;
