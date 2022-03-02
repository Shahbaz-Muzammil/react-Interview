import React,{useState} from 'react';

const CoWrite=()=>{
    const [data,setData]=useState("")
    return(
        <div>
            <input type="text" onChange={(e)=>setData(e.target.value)}/> 
            <h1>{data}</h1>
        </div>
    )
}
export default CoWrite;