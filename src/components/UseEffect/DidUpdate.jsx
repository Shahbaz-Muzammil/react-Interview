            import React,{useState, useEffect} from 'react';

const DidUpdate = () => {
    const days= [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    
    ]
    const [text,setText]=useState("");
    const [lists, setLists]=useState(days);
    useEffect(()=>{
        const filtered = days.filter((elem)=>elem.toLowerCase().includes(text.toLowerCase())
        );
        setLists(filtered);
    },[text]);

    return (
        <div>
            <h1>hello this is DidUpdate Component </h1>
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <div>  <ul>{lists.map((days)=>{
                    return<li>{days}</li>
                })}

            </ul></div>
            
        </div>
    );
};

export default DidUpdate;
