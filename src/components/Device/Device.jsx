import React from 'react';

const Device = (props) => {
    console.log(props)
    return (
        <div>
            <h3>I have a device {props.name}</h3>
            
        </div>
    );
};

export default Device;