import React, { useEffect, useState } from 'react';
import Dial from '../Dial/Dial';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = ()=>{
        const nextSteps = steps + 1
        setSteps(nextSteps);
    }
    //sync with numb 
    useEffect(()=>{

    }, [steps])
    return (
        
        <div style={{border: '2px solid red', margin: '10px'}}>
            <h2>My watch</h2>
            <p>Steps: {steps}</p>
            <button onClick={increaseSteps}>Time</button>
            <Dial steps={steps}></Dial>
        </div>
    );
};

export default Watch;