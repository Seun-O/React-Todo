import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

let index = 0;
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [
      { id: 1, task: "Bake Cookies", complete: false },
      { id: 2, task: "Wash Plates", complete: false }
    ]
  };

  _markDone = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    });
  };
  _addTodo = task => {
    const id = index++;
    const newTodo = {
      id: id,
      task,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  _clearTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => (todo.complete ? false : true))
      ]
    });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} markDone={this._markDone} />
        <TodoForm
          addTodo={this._addTodo}
          clearTodo={this._clearTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
