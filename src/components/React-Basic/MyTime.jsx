import React,{useState} from 'react';

const MyTime = () => {
    const [time, setTime]= useState(10000000);
    setTimeout(()=>{
        setTime(time + 100000);
    },1000);
    return (
        <div>
            <h1 >
                {time}
            </h1>
            
        </div>
    );
};

// export default MyTime;

// const MyTime=()=>{
//     const (time, setTime)=useState(1000);
//     setTimeout(()=>{
//         setTime(time+1200)
//     },1000)
//     return(
//         <div>
//             <h1>{time}</h1>
//         </div>
//     )

// }