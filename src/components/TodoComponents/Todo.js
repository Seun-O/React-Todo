import React from "react";

function Todo(props) {
  const { id, task, complete } = props.todo;
  return (
    <React.Fragment>
      <p
        style={
          complete
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        <input type="checkbox" onChange={props.markDone.bind(this, id)} />
        {task}
      </p>
    </React.Fragment>
  );
}

export default Todo;
