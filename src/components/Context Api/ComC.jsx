import React,{useContext} from 'react';
import {SendData} from "./ComA";
const ComC = () => {
    const  first = useContext(SendData)
    return (
        <div>
          <h1>  {first}</h1>

            
        </div>
    );
};

export default ComC;