import React,{useReducer} from 'react';



export const initialState={
    counter:0,

}
export const reduce=(state,action )=>{
   if(action.type ==="INCREMENT"){
   return state + 1; 
}
if(action.type ==="DECREMENT"){
    return state - 1;
}
    return state;
}
export const TestReducer=() => {
   const [state,dispatch]= useReducer(reduce,initialState)
  return (
    <div>
        <h1>TestReducer</h1>
        <h1>conter :{state.counter}</h1>
        <div>
            
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREMENT</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
        </div>

        
        </div>

  )
}
 export default TestReducer;