import React, {useState} from "react";

export default App = () => {

  const [toDo, addToDo] = useState([])
  const [inputValue, setInputValue] = useState("")

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleClick = () => {
    inputValue.trim() && addToDo([...toDo,inputValue])
    setInputValue("")
  }

  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input maxLength="20" type="text" value={inputValue} onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDo.map((el,i) => {
            return <li key={i}>{el}</li>
          })}
        </ul>
      </div>
    </div>
  );
}


