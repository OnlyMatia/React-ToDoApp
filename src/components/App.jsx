import React, { useState } from "react";
import Heading from "./Heading";
import Todo from "./Todo";

const App = () => {
  const [toDo, addToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    inputValue.trim() && addToDo([...toDo, inputValue]);
    setInputValue("");
  };

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input maxLength="20" type="text" value={inputValue} onChange={handleChange} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDo.map((el, i) => {
            return <Todo key={i} text={el} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
