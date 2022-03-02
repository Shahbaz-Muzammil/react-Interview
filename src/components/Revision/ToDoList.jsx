import React,{useState} from 'react';

const ToDoList = () => {
    const [text,setText] = useState("");
    const [data,setData] = useState([]);
    const handleInputValue =(elem)=>{
        setText(elem.target.value);
    };
    const handleData=()=>{ 
       // text.length > 0 &&//
        setData([...data, text])
        console.log(data ,"Hello")
        document.getElementByIdElementbyId("input").value=" ";
    }
    const RemoveData=()=>{
        setData(data);
    }

    return (
        <div>
            <h1>This is array use state</h1>
            <input type="text" onChange={handleInputValue}/>
            <button onClick={handleData}>ADD</button>
            <button onClick={RemoveData}>Remove</button>
            <h1>{text}</h1>
            <ul>
                { data.map((element)=>{
                    return(
                    <div>
                        <li>{element}</li>
                    </div>

                        )

                })}
            </ul>
            
        </div>
    );
};

export default ToDoList;