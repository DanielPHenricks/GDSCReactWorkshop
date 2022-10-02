import React from "react";

const Form = (props) => {
  const handleTodo = (event) => {
    props.setTodo(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setTodos([
      ...props.todos,
      { title: props.todo, id: new Date().getTime() },
    ]);
    props.setTodo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleTodo} value={props.todo} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
