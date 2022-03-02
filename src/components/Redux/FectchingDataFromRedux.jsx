import React from 'react';
import { useSelector } from 'react-redux';


const FectchingDataFromRedux = () => {

   const selector  =  useSelector((state)=>state.sampleReducer.myState)
    return (
        <div>
            <h1>fetching Data From Redux</h1>
            {selector.map((itemCurrent)=>{
                return(
                    <div key={itemCurrent.id}>
                        <h1>Name:{itemCurrent.name}</h1>
                        <img  src={itemCurrent.image}
                        style={{width:"18 rem"}}/>
                        <h1>Body:{itemCurrent.body}</h1>
                    </div>
                )
            }
            
            )}
            
        </div>
    );
};

export default FectchingDataFromRedux;