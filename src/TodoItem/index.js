import './TodoItem.css';

function TodoItem({text, completed, onComplete, onDelete}) {
    return (
      <li className="todo-item">
        <input type='checkbox' checked={completed} onClick={onComplete} className={`radio ${completed? 'filled':'empty'}`}/>
        <p className={`todo-text ${completed? 'underline':''}`}>{text}</p>
        <p className='todo-delete' onClick={onDelete}>X</p>
      </li>
    );
  }

export { TodoItem };