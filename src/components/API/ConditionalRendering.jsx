import React, { useState } from 'react';
import axios from 'axios';
const ConditionalRendering = () => {
  const [api, setApi] = useState([]);
  const [data, setData] = useState();
  const [rmdata, setRmdata] = useState(true);

  const fetchData = async () => {
    const result = await axios.get('https://fakestoreapi.com/products');
    setApi(result.data);
    console.log(result.data);
  };
  const handlefetch = () => {
    setData(fetchData());
    setRmdata(true);
  };
  const handleRemove = () => {
    setRmdata(false);
  };
  return (
    <div>
      {rmdata === true &&
        api.map((elem, index) => {
          return index !== 5 && <h1>{elem.title}</h1>;
        })}
      <button onClick={handlefetch}>fetchData</button>
      <button onClick={handleRemove}>RemoveData</button>
    </div>
  );
};
export default ConditionalRendering;
