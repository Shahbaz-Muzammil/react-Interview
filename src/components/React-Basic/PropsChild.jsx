import React from 'react';
import {Card,Button,} from 'react-bootstrap'

const PropsChild = ({initialState}) => {
    return(
        <div style={{display:"flex"}}>
            {initialState.map((items)=>{
                console.log("items==>",items);
                return(<Card style={{ width: '18rem' }}>
                    
                <Card.Img variant="top" src={items.cardImg} />
                <Card.Body lg='2'>
                  <Card.Title>{items.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
                    
                )

            })}

        </div>
    );
};

export default PropsChild;