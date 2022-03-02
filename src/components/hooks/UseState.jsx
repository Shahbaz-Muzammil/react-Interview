import  React  from "react";  
import {useState} from "react";

export const UseState = ()=>{
// ............getter current state read/setter update current state read
    const [count,setCount] = useState(10); //useState(initailvalue)
const [text,setText] = useState("Guest"); //initiail value
    return(
        <div>
            <input type="text" onChange={(e)=> setText(e.target.value)}/>
            <h1>{text}</h1>
            <button onClick={()=>setCount(count + 1)}>increment</button>
            <h1>value:{count}</h1>
            <button onClick={()=> setCount(count - 1)}>decrremenet</button>
        </div>
    )
}