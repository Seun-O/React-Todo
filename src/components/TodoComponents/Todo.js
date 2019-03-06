import React from "react";

function Todo(props) {
  return (
    <React.Fragment>
      <ul>
        <li style={props.completed ? { textDecoration: "line-through" } : null}>
          {props.task}
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Todo;
