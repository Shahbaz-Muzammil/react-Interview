import React,{useState} from 'react';

const ObjectInUseState = () => {
    const [detail,setDetail]=useState({
        Name:"Hello",
        Age:"10",
        message:"welcome"
    })
    return (
        <div>
            <h1>this is objectInUseState Compound</h1>
            <input type="text" placeholder="Home" onChange={(e)=>setDetail({...detail,Name:e.target.value})}/>
            <input type="text" placeholder="Age" onChange={(e)=>setDetail({...detail,Age:e.target.value})}/>
            <input type="text" placeholder="Message"onChange={(e)=>setDetail({...detail,Message:e.target.value})}/>
            <h1>Name:{detail.Name}</h1>
            <h1>Age:{detail.Age}</h1>
            <h1>Message:{detail.Message}</h1>
        </div>
    );
};

export default ObjectInUseState;

















// const [name,setName]=useState("")
// const [age,setAge]=useState("")
// const [message,setMessage]=useState("")
// return (
//     <div>
//         <h1>this is objectInUseState Compound</h1>
//         <input type="text" placeholder="Home" onChange={(e)=>setName(e.target.value)}/>
//         <input type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
//         <input type="text" placeholder="Message"onChange={(e)=>setMessage(e.target.value)}/>
//         <h1>Name:{name}</h1>
//         <h1>Age:{age}</h1>
//         <h1>Message:{message}</h1>

//     </div>
// );