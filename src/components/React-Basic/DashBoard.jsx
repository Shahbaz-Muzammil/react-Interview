import React,{useState, useEffect}from 'react';
import "./Dashboard.css";

const DashBoard = () => {
    
    const [colr,setColr]= useState("orange");
    const [dist,setDist]=useState(0);
    const [time,setTime]=useState(0);
    useEffect(()=>{
        
        const speed=dist/time;
    speed < 40 && setColr("green");
    speed < 50 && speed>40 && setColr("orange");
    speed > 50 && setColr("red");
 },[dist,time])  
    return (
        <div>
            Distance:<input type="number" onChange={(e)=>setDist(e.target.value)}/>
            <br/>
            Time : <input type="number"onChange={(e)=>setTime(e.target.value)}/>
            <br/>
            <br/>
            <div className='bulb' style={{backgroundColor:colr}}></div>
            <p>{dist}km</p>
            <p>{time}</p>

            
        </div>
    );
};

export default DashBoard;