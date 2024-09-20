import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const Filter = () => {
  const [filter, setFilter] = useState('all');
  const { todos } = useContext(TodoContext);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'uncompleted') return !todo.completed;
    return true;
  });

  return (
    <div>
      <div className="flex justify-center my-4">
        <button className="p-2 mx-2" onClick={() => setFilter('all')}>All ({todos.length})</button>
        <button className="p-2 mx-2" onClick={() => setFilter('completed')}>Completed ({todos.filter(todo => todo.completed).length})</button>
        <button className="p-2 mx-2" onClick={() => setFilter('uncompleted')}>Uncompleted ({todos.filter(todo => !todo.completed).length})</button>
      </div>
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id} className="flex items-center justify-between p-2 border-b">
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
