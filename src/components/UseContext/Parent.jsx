// import React,{createContext} from 'react';
// import Child1 from './Child1';


// export const sendData = createContext();

// const Parent = () => {
//     const name = "jhon wick";
//     return (
//         <div>
//             <h1>this is parentcomponent</h1>
//             <sendData.Provider value={name}/>
//             <Child1/>
//             <sendData.Provider/>
            
            
//         </div>
//     );
// };


// export default Parent;
import React,{createContext} from 'react';
import Child1 from './Child1';
// import Child3 from './Child3';

export const sendData =createContext()

const Parent = () => {
    const name="jhon wick"
    return (
        <div>
            <h1>this is parent</h1>
            <sendData.Provider value={name}>
            <Child1 />
            </sendData.Provider>
            
        </div>
    );
};

export default Parent;