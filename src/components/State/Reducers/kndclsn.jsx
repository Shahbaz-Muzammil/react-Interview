import React,{useSelector,useState,useEffect} from 'react';


const ProductBody = () => {
    const [productData,setProductData]=useState([])
    const ProductResult=useSelector((state)=>state.ProductReducer.newdata)
    useEffect(()=>{
        setProductData(ProductResult)
    },[ProductResult])
    return (
        <div>
            {productData.map((elem)=>{
                return(
                    <div>
                        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={elem.image} />
  <Card.Body>
    <Card.Title>{elem.title}</Card.Title>
    <Card.Text>
      {elem.price},
      {elem.description},
      {elem.category} ,
      {elem.rating},
      {elem.rate},
      {elem.count}
      
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
           </div>
                )

            })}
            
        </div>
    );
};

export default ProductBody;