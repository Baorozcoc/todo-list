import React from "react";
import useLocalStorage from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}){
    const [openModal, setOpenModal] = React.useState(false);
    const [search, setSearch] = React.useState('');
    const {item:toDos, updateItem: setToDos, loading, error} = useLocalStorage('TODOS',[]);
    let completedTodos = toDos.filter((todo)=>todo.completed).length;
    let filteredTodos =  toDos.filter(
        (todo)=>search?todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()):true
    );
    const completeTodo = (text) => {
        const newTodos = [...toDos];
        const index = newTodos.findIndex((todo)=>todo.text === text);
        newTodos[index].completed = !newTodos[index].completed;
        setToDos(newTodos);
    }
    const deleteTodo = (text) => {
        const newTodos = [...toDos];
        const index = newTodos.findIndex((todo)=>todo.text === text);
        newTodos.splice(index,1);
        setToDos(newTodos);
    }
    const addTodo = (text) => {
        const newTodos = [...toDos];
        newTodos.push({text: text, completed: false});
        setToDos(newTodos);
    }
    const total = toDos.length;
    return(
        <TodoContext.Provider value={{
            completedTodos,
            total,
            toDos,
            search,
            setSearch,
            filteredTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            loading,
            error,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};