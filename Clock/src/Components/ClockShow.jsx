import React, { useState, useEffect } from 'react';

function ClockShown() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // update every second

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    });
    //const currtime = new Date();
    return <><h4>This is the current time : {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}</h4></>


}

export default ClockShown;