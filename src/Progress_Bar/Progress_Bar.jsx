//eslint-disable-next-line
import React, { useState ,useEffect } from 'react';
import "./Progress_Bar.css"
const Progress_bar = () => {
    const [progress, setProgress] = useState(0);
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (progress >= 100) {
                clearInterval(intervalId);
            } else {
                setProgress(prevProgress => prevProgress + 1);
            }
        }, 10);
    
        return () => clearInterval(intervalId);
    }, [progress]);
    
    
    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}>
                 {`${progress}%`}
                </div>
            </div>
        );
    };
    
    export default Progress_bar;
    //complete