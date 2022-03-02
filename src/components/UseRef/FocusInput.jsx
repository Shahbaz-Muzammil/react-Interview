import React from 'react';
import { useEffect ,useRef,useState} from 'react';

const FocusInput = () => {
    const [show,setShow]=useState("")
    const inputRef=useRef(null);
    const showText=()=>{
        setShow(...show)
    }
    useEffect(()=>{
        inputRef.current.focus()
      
    },[])
    return (
        <div>
            <input ref={inputRef} type="text" onChange={(e)=>setShow(e.target.value)}/>
            <button onClick={showText}>addd cart
            </button>
            <h1>{show}</h1>
            
        </div>
    );
};

export default FocusInput;