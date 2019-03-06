// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
const listItems = [
  {
    id: 1,
    task: "Organized Garage",
    completed: false
  },
  {
    id: 2,
    task: "Bake Cookies",
    completed: true
  }
];
const TodoList = () => {
  return (
    <div>
      {listItems.map(item => (
        <Todo key={item.id} task={item.task} completed={item.completed} />
      ))}
    </div>
  );
};

export default TodoList;
