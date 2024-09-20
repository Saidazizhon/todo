import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodoProvider } from './TodoContext';
import Filter from './Filter';

function App() {
  return (
    <TodoProvider>
      <div className="App p-4">
        <h1 className="text-2xl font-bold text-center">Todo List</h1>
        <TodoInput />
        <Filter />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
