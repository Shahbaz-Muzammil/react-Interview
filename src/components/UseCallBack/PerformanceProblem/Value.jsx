import React from 'react';

const Value = ({text,count}) => {
    console.log("Value comp ",text,count);
    return (
        <div>
            <h1>{`${text}----${count}`}</h1>
            
        </div>
    );
};

export default Value;