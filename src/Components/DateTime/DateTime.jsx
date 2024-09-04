import './DateTime.css'
import { useState, useEffect } from 'react';

const DateTime = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const today = new Date();
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const day = days[today.getDay()];
            const month = today.toLocaleString('default', { month: 'short' });
            const formattedDate = day + ' ' + month + ' ' + today.getDate() + ', ' + today.getFullYear();
            const time = today.toLocaleTimeString();
            const dateTime = formattedDate + ' | ' + time;
            setDateTime(dateTime);
        };

        // Update the time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className='date'>
            <h3>Today</h3>
            <p>{dateTime}</p>
        </div>
    );
}

export default DateTime;
