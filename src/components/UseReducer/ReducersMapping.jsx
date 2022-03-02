//                ADD CART ----->>>>>>>>>>>

import React,{useReducer} from 'react';

export  const initialState = {
    allData:[
        {title:"Intersteller", rating: 5, year : 2019},
        {title:"iron man", rating: 5, year : 2014},
        {title:"ip man", rating: 5, year : 2015},
        {title:"captain", rating: 5, year : 2014},
        {title:"gi joe", rating: 5, year : 2016},
        {title:"dark", rating: 5, year : 2018},
    ],
    added:[],
};

export const reducer =(state,action)=>{
    if(action.type === "Add-Movie"){
    return{...state,added:[...state.added,action.data] };
    }

};

const ReducersMapping = () => {
    const [getState,dispatch]=useReducer(reducer,initialState);
    return (
        <div>
            <h1>hello this ReducersMapping</h1>
            {getState.allData.map((item)=>{
                return(
                    <div>
                    <h1>{item.title}</h1>
                    <h1>{item.rating}</h1>
                    <h1>{item.year}</h1>
                    <button onClick={()=>dispatch({type:"Add-Movie", data: item })}>ADD Movie</button>
            
                    </div>

                );
            })}
            <h1>Added Items</h1>
            {getState.added.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <h1>{item.rating}</h1>
                        <h1>{item.year}</h1>
                    </div>
                );
            })}
        </div>
    );
};

export default ReducersMapping;