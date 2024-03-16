import React, { useState } from "react";
import Heading from "./Heading";
import Todo from "./Todo";

const App = () => {
  const [toDo, addToDo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  localStorage.getItem

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    inputValue.trim() && addToDo([...toDo, inputValue]);
    setInputValue("");
  };

  const deleteToDo = (id) => {
    addToDo(el => {
      return el.filter((item, index)=>{
        return index !== id
      })
    })
  }


  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input maxLength="20" type="text" value={inputValue} onChange={handleChange} onKeyDown={handleKeyPress} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDo.map((el, i) => {
            return <Todo key={i} id={i} text={el} delete={deleteToDo} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
