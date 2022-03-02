import React,{useReducer} from 'react';

export const initialState={
    countOne:0,
    countTwo:10,
};
export const reducer =(state,action)=>{
    if(action.type==="IncrementOne"){
        return{...state , countOne: state.countOne + action.data};
    }
    if(action.type==="DecrementOne"){
        return{...state , countOne: state.countOne + action.data};
    } 
    if(action.type==="IncrementTwo"){
        return{...state , countTwo: state.countTwo + action.data};
    }
     if(action.type==="DecrementTwo"){
        return{...state , countTwo: state.countTwo + action.data};
    }else{
        return state
    }
}

const CounterReduce = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>hello useReducer</h1>
            <h2>CountOne:{count.countOne}</h2>
            <button onClick={()=>dispatch({type:"IncrementOne", data:5})}>IncrementCountOne</button>
            <button onClick={()=>dispatch({type:"DecrementOne",data:5})}>DecrementCountOne</button>
            <h2>CountTwo:{count.countTwo}</h2>
            <button onClick={()=>dispatch({type:"IncrementTwo,",data:2})}>IncrementCountTwo</button>
            <button onClick={()=>dispatch({type:"DecrementTwo,",data:2})}>DecrementCountTwo</button>
            
            
        </div>
    );
};

export default CounterReduce;