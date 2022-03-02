import React from 'react';

const ProductItem = (props) => {
    console.log(props.items)
    return (
        <div className="proditem"> 
            <h1>title</h1>
        <img src={props.items.image} alt=""/>
        <p>price {props.item.price}</p>
        <h4>Discription{props.item.discription} </h4>
    
            
            
        </div>
    );
};

export default ProductItem;