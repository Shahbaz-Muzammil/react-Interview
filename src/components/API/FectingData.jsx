import React from 'react';
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import PostData from './PostData';


const FectingData = () => {
    const [apiData,setApiData]=useState([])
    const getPost=async()=>{
        const myData= await axios.get("http://localhost:3000/products");
        setApiData(myData.data);
        // .then((response)=> {
        //     console.log(response)

        // },)
        // .catch((error)=>{
        //     console.log(error)
        // })
    };
    useEffect(()=>{
        getPost()
    },[])


    return (
        <div>
            <PostData/>
          {apiData.map((items) => {
            return (
              <div>
                <h1>{items.title}</h1>
                <p>{items.body}</p>

              </div>
            );
          })}
          
        </div>
      );
    };
export default FectingData