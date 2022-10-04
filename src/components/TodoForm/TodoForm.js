import React from "react";

// Style Imports
import "./TodoForm.css";

const TodoForm = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        className="inputBox"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
