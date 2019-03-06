import React from "react";
import { Tween, Timeline } from "react-gsap";

const TodoHeader = () => {
  return (
    <React.Fragment>
      <Tween from={{ y: "-100px", opacity: 0 }}>
        <h1 style={headerStyles}>Todo's</h1>
      </Tween>
    </React.Fragment>
  );
};

const headerStyles = {
  textAlign: "center",
  fontSize: "4rem"
};
export default TodoHeader;
