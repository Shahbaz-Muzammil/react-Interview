import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("shahbaz");
  const handleData = () => {
    setData([...data, todo]);
    setTodo("shahbaz");
  };
  const handleRemove = (index) => {
    const remove = data.filter((elem, ele) => ele !== index);
    setData([...remove]);
  };
  return (
    <div>
      <input
        type="text"
        // value={todo}
        onchange={(e) => setTodo(e.target.value)}
      />
      <button onclick={handleData}>Add</button>
      {data.map((elem, index) => {
        return (
          <li key={index} onClick={() => handleRemove(index)}>
            {elem}
          </li>
        );
      })}
    </div>
  );
}
