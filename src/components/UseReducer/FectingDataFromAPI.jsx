import axios from 'axios';
import React,{useEffect,useState} from 'react';

const FectingDataFromAPI = () => {
    const [data,setData]=useState([]);
    const getPostDetail= async ()=>{
       const result= await axios.get("https://jsonplaceholder.typicode.com/posts");
       setData(result.data)
    // console.log("result===>",result);


    }
     useEffect(()=>{
         getPostDetail();
        

     },[])

    
    return (
        <div>
            <h1>main componenet</h1>
            {data.map((myData)=>{
                       return (
                <div key={myData.id}>
                <h2>{myData.title}</h2>
                <h3>{myData.body}</h3>
                
            
            </div>
            );  } )}

            
            
        </div>
    );
};

export default FectingDataFromAPI;