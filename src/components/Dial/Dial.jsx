import React from 'react';
import Knob from '../Knob/Knob';

const Dial = (props) => {
    return (
        <div style={{border: '2px solid purple', margin: '20px'}}>
            <h3>This is dial component</h3>
            <h5>Your step count: {props.steps}</h5>
            <Knob steps={props.steps}></Knob>
        </div>
    );
};

export default Dial;