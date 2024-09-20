import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

const TodoInput = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const addTodo = () => {
    if (text.trim()) {
      dispatch({
        type: 'ADD_TODO',
        payload: { id: Date.now(), text, completed: false }
      });
      setText('');
    }
  };

  return (
    <div className="flex items-center justify-center my-4">
      <input
        type="text"
        className="border p-2 rounded w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your todo"
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
