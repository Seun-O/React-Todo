import React from "react";
import "./App.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoHeader from "./components/TodoComponents/TodoHeader";

let index = 0;
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    todos: [],
    search: ""
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
    this.setState(pS => {
      return {
        todos: pS.todos.filter(todo => !todo.complete)
      };
    });
  };

  _todoSearch = e => {
    this.setState({ search: e.target.value });
  };
  render() {
    return (
      <div className="todo ui raised very padded text container segment">
        <TodoHeader todos={this.state.todos} />
        <div className="ui divider" />

        <TodoList
          todos={this.state.todos}
          markDone={this._markDone}
          search={this.state.search}
        />
        <TodoForm
          addTodo={this._addTodo}
          clearTodo={this._clearTodo}
          todos={this.state.todos}
          todoSearch={this._todoSearch}
          search={this.state.search}
        />
      </div>
    );
  }
}

export default App;
