import React from 'react';
import "./Prodlist.css";
import ProductItem from "./ProductItem"
import axios from "axios";
import {useEffect , useState} from "react";


const ProductList = () => {
    const [data,setData]=useState([])
    const  getProducts = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        console.log(result);
        setData(result.data)
    };
    useEffect (()=> {

        getProducts()

    },[])
    return (
        <div className="prodlist">
            {data.map((items)=>{
                return  <ProductItem items = {items} key={items.id}/>
            })}
        
            
        </div>
    );
};

export default ProductList;