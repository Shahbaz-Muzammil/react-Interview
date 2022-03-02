import React,{useState} from 'react';


const Toggle = () => {
    const [myName,setMyName]=useState("SHAHBAZ");
    const handleChange=()=>{
        
        if(myName==="SHAHBAZ"){
            setMyName("Muzammil");
 }else{setMyName("SHAHBAZ")}
    }

    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={handleChange}>toggle</button>
            
        </div>
    );
};

export default Toggle;