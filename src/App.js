import { useState } from "react";

// Component Imports
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";

// Style Imports
import "./App.css";

const App = () => {
  // state containing inputted value, our new todo
  const [todo, setTodo] = useState("");
  // state containing all of our todos
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    // Prevent refreshing whenever we click on the Add button
    e.preventDefault();

    // Add new todo
    if (todo !== "") {
      const newTodo = {
        id: `${todo}-${Date.now()}`,
        task: todo,
      };

      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((todo) => todo.id !== id);
    setTodos([...delTodo]);
  };

  return (
    <div className="container">
      <Header />
      <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
