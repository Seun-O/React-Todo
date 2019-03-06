import React from "react";
import { Tween } from "react-gsap";

function Todo(props) {
  const { id, task, complete } = props.todo;
  return (
    <Tween from={{ x: "-100px", opacity: "0" }}>
      <div className="ui message">
        <div className="header">
          <div
            className="ui checkbox"
            style={
              complete
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            <input type="checkbox" onChange={props.markDone.bind(this, id)} />
            <label>{task} </label>
          </div>
        </div>
      </div>
    </Tween>
  );
}

export default Todo;
