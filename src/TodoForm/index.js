import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm(){
    const {setOpenModal, addTodo} = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const onSubmit= (event)=>{
        if(event) event.preventDefault();
        addTodo(newTodoValue);
        setNewTodoValue('');
        setOpenModal(false);
    }
    const keyDownFunction = (event)=> {
        if(event.key==="Enter") onSubmit();
    }
    return (
        <form onSubmit={onSubmit} className="todo-form">
            <label className="todo-label">Escribe tu nueva tarea</label>
            <textarea className="todo-text" value={newTodoValue} onChange={(event)=>setNewTodoValue((event.target.value).replace(/(\r\n|\n|\r)/gm, ""))} 
             rows={10} required onKeyDown={(event)=>keyDownFunction(event)} placeholder="Inicia un proyecto"/>
            <button className="todo-create-button" type="submit">Crear</button>
        </form>
    )

}

export {TodoForm};