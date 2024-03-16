import React from "react";

const Todo = (props) => {
  const [styles, toggleStyle] = React.useState(false)

  const handleClick = () => {
    styles ? toggleStyle(false) : toggleStyle(true)
  }

  return (
    <div >
      <li 
     onDoubleClick={() =>{
      props.delete(props.id)
     }} onClick={handleClick} style={{textDecoration: !styles ? "none" : "line-through"}}>{props.text}</li> 
    </div>
  );
};

export default Todo;
