import { height } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Card,
  Button,
  Badge,
  Container,
  Row,
  Col,
  Spinner,
} from 'react-bootstrap';
import { TextArea } from 'semantic-ui-react';
// import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const FetchingMobileData = () => {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProduct = () => {
    setIsLoading(false);
    setTimeout(async () => {
      const result = await axios.get('https://dummyjson.com/products');
      setApi(result.data.products);
      console.log(result.data.products);
      setIsLoading(true);
    }, 300000);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div style={{ color: 'red' }}>
      {isLoading ? (
        api.map((elem) => {
          return (
            <>
              <Container
                style={{
                  backgroundColor: 'yellowgreen',
                  height: '32rem',
                  float: 'left',
                }}
              >
                <Row>
                  <Col>
                    <Card style={{ width: '25rem' }}>
                      <Card.Img
                        variant="top"
                        src="https://dummyjson.com/image/i/products/2/3.jpg"
                      />
                      <Card.Body>
                        <Card.Title>{elem.title}</Card.Title>
                        <Card.Text style={{}}>
                          {elem.description.slice(0, 20) + '.....'}
                        </Card.Text>
                        <Badge bg="dark">price:{elem.price}</Badge>
                        <br />
                        <Button style={{ color: 'grey' }}>Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </>
          );
        })
      ) : (
        <Spinner
          style={{ marginTop: '25rem', marginLeft: '60rem' }}
          animation="border"
          role="status"
        >
          {/* <span className="visually-hidden">Loading...</span> */}{' '}
          <h1
            style={{
              marginTop: '10px',
              marginLeft: '16px',
              marginRight: '1500px',
            }}
          >
            loading
          </h1>
        </Spinner>
      )}
    </div>
  );
};

export default FetchingMobileData;
