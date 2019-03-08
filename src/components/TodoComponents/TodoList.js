// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, markDone, search }) => {
  const filteredList = todos.filter(todo => {
    return todo.task.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });
  return (
    <div className="ui middle aligned animated list">
      {filteredList.map(todo => (
        <Todo key={todo.id} todo={todo} markDone={markDone} />
      ))}
    </div>
  );
};

export default TodoList;
