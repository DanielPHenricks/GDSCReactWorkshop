import { useState } from "react";

// Component Imports
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

// Style Imports

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
        date: getFormattedDate(),
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

  const getFormattedDate = () => {
    const curr = new Date(Date.now());
    // note: the month is zero-indexed.
    return `${curr.getMonth() + 1}/${curr.getDate()} at ${curr.getHours() % 12}:${curr.getMinutes()}: `
  }

  return (
    <div className="container">
      <Header />
      <TodoForm handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
