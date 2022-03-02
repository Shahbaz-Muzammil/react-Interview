// import React,{useContext} from 'react';
// import { sendData } from "./Parent"

// const Child3 = () => {
//     const dataRecieved=useContext(sendData);
    
//     return (
//         <div>
//             <h1>3333</h1>
//             <h1>Data Reacievedfreom parent :{dataRecieved}</h1>
//             {/* <sendData.Consumer>
//                 {(value)=>{

//                     return <h1>data recieve from parent comp:{value}</h1>
//                 }}
//             </sendData.Consumer> */}
//             {/* {data} */}
//         </div>
//     );
// };

// export default Child3;



import React,{useContext} from 'react';
import {sendData} from './Parent';

const Child3 = () => {

    const dataRecieved=useContext(sendData)
    console.log(dataRecieved)
    return (
        <div>
            <h1>this parent data recieved: {dataRecieved}</h1>
            
        </div>
    );
};

export default Child3;