import React from 'react';
import style from './TodoList.module.css'

const TodoList = ({todos,handleEditTodo,deleteTodo}) => {

  const list = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className={style.todoItem}
      >
        {todo.text}
        <div>
          <button
            onClick={(e)=> handleEditTodo(todo)}
          >
            Edit
          </button>
          <button
            onClick={()=>deleteTodo(todo.id)}
          >
            X
          </button>
        </div>
      </li>
    )
  })

  return (
    <div className={style.todoListWrapper}>
      {
        todos.length > 0 ?
          <h3>Список заметок</h3>:
          <h3>Добавьте свою первую заметку</h3>
      }
      <ul className={style.todoList}>
        {
          list
        }
      </ul>
    </div>
  );
}

export default TodoList;