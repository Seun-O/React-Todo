import React from "react";

const TodoForm = () => {
  return (
    <React.Fragment>
      <input type="text" />
      <button type="submit">Add Todo</button>
      <button type="submit">Clear Completed</button>
    </React.Fragment>
  );
};

export default TodoForm;
