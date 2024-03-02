import React from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {completedTodos, total} = React.useContext(TodoContext);
  return (
    <h1 className="todo-counter">{completedTodos}/{total}</h1>
  );
}

export {TodoCounter};