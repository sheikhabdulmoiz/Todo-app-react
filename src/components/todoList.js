import React from "react";
import "./todoList.css";

const TodoList = (props) => {
  return props.todos.map((todo) => {
    return <li key={todo.id}>{todo.text}</li>;
  });
};

export default TodoList;
