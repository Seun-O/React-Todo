import React from "react";
import { Tween } from "react-gsap";

function Todo({ todo, markDone }) {
  return (
    <Tween from={{ x: "-50px", opacity: "0" }}>
      <div className="ui message">
        <div className="header">
          <div
            className="ui checkbox"
            style={
              todo.complete
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            <input type="checkbox" onChange={markDone.bind(this, todo.id)} />
            <label>{todo.task} </label>
          </div>
        </div>
      </div>
    </Tween>
  );
}

export default Todo;
