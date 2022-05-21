import React, { useState } from 'react';

export default function Ontogglechangecolor() {
  const colour = '#8e43ad';
  const [name, setName] = useState('shahbaz');
  const [color, setColor] = useState(colour);
  const changename = () => {
    name === 'shahbaz' ? setName('muzammil') : setName('shahbaz');
    let newcolor = '#34495e';
    setColor(newcolor);
    if (color === newcolor) {
      setColor('#8e43ad');
    }
  };

  return (
    <div style={{ backgroundColor: color }}>
      <h1>{name}</h1>
      <button onClick={changename}>toggle</button>
    </div>
  );
}