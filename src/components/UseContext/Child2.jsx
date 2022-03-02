import React from 'react';
import Child3 from './Child3';
// {test,value}
const Child2 = () => {
    console.log("child two")
    return (
        <div>
            <h1>child 2</h1>
            <h1></h1>
            {/* {value} */}
            <Child3/>
            {/* data={value */}
        </div>
    );
};

export default Child2;