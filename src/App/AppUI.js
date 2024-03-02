import React from "react";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI() {
    const {
      loading,
      error,
      filteredTodos,
      completeTodo,
      deleteTodo,
      openModal,
      total
    } = React.useContext(TodoContext);
    return (
        <div id="todos-global">
          <div className="todos-container">
            <TodoCounter/>
            <TodoSearch/>
            <TodoList>
              {loading && <p className="todo-message">Cargando...</p>}
              {error && <p className="todo-message">Error al traer los elementos</p>}
              {(!loading && !!total && (!filteredTodos || !filteredTodos.length)) && <p className="todo-message">No hay coincidencias!</p>}
              {(!loading && !total && (!filteredTodos || !filteredTodos.length)) && <p className="todo-message">Crea tu primera tarea!</p>}
              {!loading && filteredTodos.map((todo,indexTodo)=>(
                <TodoItem 
                  key={indexTodo} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={()=>completeTodo(todo.text)}
                  onDelete={()=>deleteTodo(todo.text)}
                />
              ))} 
            </TodoList>
          </div>
          
          <CreateTodoButton/>
          <div className="modal-desktop">
            <TodoForm></TodoForm>
          </div>
          {openModal &&
            <Modal className="modal-mobile">
              <TodoForm></TodoForm>
            </Modal>
          }
          <div id="credits">Creado por: Berny Alejandro Orozco Córdoba</div>
        </div>
      );
}

export {AppUI};