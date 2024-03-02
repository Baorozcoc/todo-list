import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const {search, setSearch} = React.useContext(TodoContext);
  return (
    <input onChange={(event)=>setSearch(event.target.value)} 
    value={search} placeholder="Filtrar por ..." className="todo-search"/>
  );
}

export {TodoSearch};