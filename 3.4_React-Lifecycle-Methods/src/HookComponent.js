import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function HookComponent({ name }) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [updateCount, setUpdateCount] = useState(0);

    useEffect(() => {
        // This is equivalent to componentDidMount
        console.log('Hook Component mounted');
        const timerId = setInterval(() => setCurrentDate(new Date()), 1000);

        // This is equivalent to componentWillUnmount
        return () => {
            console.log('Hook Component will unmount');
            clearInterval(timerId);
        };
    }, []); // Empty dependency array means this only runs on mount/unmount

    useEffect(() => {
        // This is equivalent to componentDidUpdate for currentDate changes
        setUpdateCount(count => count + 1);
        console.log(`Hook Component updated ${updateCount} times`);
    }, [currentDate]); // Only run when currentDate changes

    return (
        <>
            <h2>Hello, {name}! (Hook Version)</h2>
            <p>The time is: {currentDate.toLocaleTimeString()}</p>
            <p>The date is: {currentDate.toLocaleDateString()}</p>
            <p>Number of updates: {updateCount}</p>
            <p>
                Click this button to update the time:
                <button onClick={() => setCurrentDate(new Date())}>
                    Update Time
                </button>
            </p>
        </>
    );
}

HookComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default HookComponent;
