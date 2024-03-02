import './CreateTodoButton.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {
  const {openModal, setOpenModal} = React.useContext(TodoContext);
    return (
      <button onClick={()=>setOpenModal(!openModal)} className='create-todo-button'>{openModal? 'Cerrar':'Añadir'}</button>
    );
}

export { CreateTodoButton };