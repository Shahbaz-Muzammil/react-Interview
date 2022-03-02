import React,{useState} from 'react';
import Title from './Title';
import Value from "./Value";
import Buttons from "./Buttons";
import { useCallback } from 'react';


const Home = () => {
    const [age , setAge]=useState(0);
    const [income,setIncome]=useState(10000);
    const handleAge= useCallback (()=>{
        setAge(age+1);
    },[age])
        const handleIncome=useCallback(()=>{
        setIncome(income+5000)
    },[income])
    return (
        <div>
            <h1>this is value component</h1>
            <Title/>
            <Value text="Age" count={age}/>
            <Buttons handleFunction={handleAge}>Add Age</Buttons>
            <Value text="Income" count={income}/>
            <Buttons handleFunction={handleIncome}>Add Income</Buttons>
            
        </div>
    );
};

export default Home;