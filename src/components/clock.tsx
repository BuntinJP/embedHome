import React, { useState, useEffect } from 'react';
import '@styles/clock.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const ticker = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(ticker);
    }, []);

    return (
        <>
            <a
                href="#" //center
                className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 text-center shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    NOW
                </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Date:{' '}
                    {`${time.getFullYear()}-${
                        time.getMonth() + 1
                    }-${time.getDate()}(${
                        ['日', '月', '火', '水', '木', '金', '土'][
                            time.getDay()
                        ]
                    })${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`.replace(
                        /\n|\r/g,
                        ''
                    )}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Time: {time.toLocaleString()}
                </p>
            </a>
        </>
    );
};

export default Clock;
