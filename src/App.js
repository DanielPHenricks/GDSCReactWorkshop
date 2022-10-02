import { useState } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
// import ToDoList from "./components/ToDoList/ToDoList";

import "./App.css";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <Header />
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <h2>{todo.title}</h2>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
