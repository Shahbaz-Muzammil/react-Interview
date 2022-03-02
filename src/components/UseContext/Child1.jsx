import React from 'react';
import Child2 from './Child2';
// props
const Child1 = () => {
    console.log("child one")
    return (
        <div>
            <h1>child 1</h1>
            <Child2/> 
            {/* //test={50} value={//props.value} */}
            
        </div>
    );
};

export default Child1;