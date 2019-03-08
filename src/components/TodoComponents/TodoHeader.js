import React from "react";
import { Tween, Timeline } from "react-gsap";

const TodoHeader = ({ todos }) => {
  console.log(typeof todos);
  return (
    <React.Fragment>
      <Tween from={{ y: "-100px", opacity: 0 }}>
        <h1 className="ui center aligned huge header" style={headerStyles}>
          <i className="settings icon" style={{ color: "#db2828" }} />
          <div className="content">
            To do List
            <div className="sub header">some motivational quote here</div>
          </div>
        </h1>
      </Tween>
    </React.Fragment>
  );
};

const headerStyles = {
  textAlign: "center !important",
  fontSize: "4rem"
};
export default TodoHeader;

// { color: "#db2828" }
