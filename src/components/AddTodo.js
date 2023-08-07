import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const enteredTextHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const AddTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = [
      {
        id: Math.random().toString(),
        text: enteredText,
      },
    ];
    props.onAddTodo(newTodo);
    setEnteredText("")
    // console.log(newTodo);
  };

  return (
    <form className="add_todo" onSubmit={AddTodoHandler}>
      <input type="text" value={enteredText} onChange={enteredTextHandler} />
      {/* <input type="text" value={enteredText} /> */}
      <button>Add Todo</button>
    </form>
  );
};

export default AddTodo;
