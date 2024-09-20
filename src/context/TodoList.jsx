import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  const updateTodo = (id) => {
    const newText = prompt('Update todo text:');
    if (newText && newText.trim()) {
      dispatch({
        type: 'UPDATE_TODO',
        payload: { id, text: newText }
      });
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  return (
    <ul className="list-none p-0">
      {todos.map((todo) => (
        <li key={todo.id} className="flex items-center justify-between p-2 border-b">
          <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <button
              className="bg-red-500 text-white p-2 rounded ml-2"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded ml-2"
              onClick={() => updateTodo(todo.id)}
            >
              Update
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
