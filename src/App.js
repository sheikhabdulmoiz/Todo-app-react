import React, { useState } from "react";
import TodoList from "./components/todoList";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Ask Forgiveness" },
    { id: 2, text: "Pray for Good" },
    { id: 3, text: "Respect Parents" },
  ]);

  const addNewTodoHandler = (newTodo) => {
    setTodos((prevTodos) => {
     return prevTodos.concat(newTodo);
    });
  };

  console.log(todos);

  return (
    <div className="todo_list">
      <h1>Todo App</h1>
      <AddTodo onAddTodo={addNewTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
