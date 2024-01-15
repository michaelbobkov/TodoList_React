import React, { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

function App() {
  const [todos, setTodos] = useState([
    { id: 0, content: 'buy some milk' },
    { id: 1, content: 'play mario kart' }
  ]);

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  const addTodo = (todo) => {
    // Use a different variable name for the new array
    const newTodos = [...todos, { id: Math.random(), content: todo }];
    setTodos(newTodos);
  }

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;