import React from "react";

const TodoForm = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="What do you want to do?"
        className="inputBox"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
