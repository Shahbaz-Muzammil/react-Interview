import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { Card,Button } from "react-bootstrap";

export const NewsBody = ()=>{
    const [newsData,setNewsData]=useState([]);
    console.log("name==>>" , newsData)
       const finalResult = useSelector ((state)=>state.NewsReducer.newsData)

useEffect(()=>{
    setNewsData(finalResult);
},[finalResult])
return(
    <div>
            {newsData.map((elem)=>{
                return(
                    <div>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elem.Image} />
                    <Card.Body>
                      <Card.Title>{elem.title}</Card.Title>
                      <Card.Text>
                      {elem.discription}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
              </Card>
                </div>
                  
                )

            })}

 
    </div>
)
        }