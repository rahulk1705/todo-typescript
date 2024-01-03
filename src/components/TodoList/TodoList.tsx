import React from 'react';
import "./style.css";
import { Todo } from '../../models/models';

interface TodoListProps {

  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <li>{todo.todo}</li>
      ))}
    </div>
  )
}

export default TodoList
