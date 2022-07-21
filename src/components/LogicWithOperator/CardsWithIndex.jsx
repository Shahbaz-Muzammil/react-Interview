import React,{useState} from "raect"
import { Card, CardContent, Grid } from "@mui/material";

export default function CardsWithIndex(){
  const [id, setId] = useState();
  const [isShow, setIsShow] = useState(false);
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleClick = (index) => {
    setId(index);
    setIsShow(true);
  };
  const handleChange = () => {
    setIsShow(false);

  };
  return (
    <div className="App">
      <Grid container spacing={3}>
        {array.map((item, index) => {
          return (
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  {isShow === false && (
                    <p onClick={() => handleClick(index)}>+</p>
                  )}
                  {isShow === true && id !== index && (
                    <p onClick={() => handleClick(index)}>+</p>
                  )}
                  {isShow === true && index === id && (
                    <p onClick={() => handleChange(index)}>-</p>
                  )}
                  <h1 style={{color:isShow===true && index===id?"red":"yellow"}}>{item}</h1>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

