import React, { useState } from "react";

const TableInput = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [data, setData] = useState([]);
  const handle = () => {
    setData([...data, text1,text2,text3]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="FirstName"
        onChange={(e) => setText1(e.target.value)}
      />
      <input
        type="text"
        placeholder="lastname"
        onChange={(e) => setText2(e.target.value)}
      />
      <input
        type="text"
        placeholder="phoneNumber"
        onChange={(e) => setText3(e.target.value)}
      />
      <button onClick={handle}>add</button>
      <table>
      <tr>
        {data.map((elem) => {
            return(
          <>
              <td>{elem}</td>
              <td>{elem}</td>
              <td>{elem}</td>
          </>)
        })}
            </tr>

      </table>
    </div>
  );
};

export default TableInput;
