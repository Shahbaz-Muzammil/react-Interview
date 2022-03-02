import React,{useReducer} from 'react';
export const initialState ={
    counter:100,
}
export const reducer =(state,action)=>{
    // it is javascript pure function
    if (action.type ==="increment"){
        return(
            counter+1
        )
    } if (action.type==="decrement"){
        return(
            counter-1
        )

    }
    return state;
    
    
    
};
const CounterWithReducer = () => {    //function     //intiastate(value)
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            <h1>this is usereducer</h1>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
            
        </div>
    );
};

export default CounterWithReducer;