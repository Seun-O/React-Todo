import React, { Component } from "react";

class TodoForm extends Component {
  state = { task: "" };
  _onChange = e => {
    this.setState({ task: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  onClear = e => {
    e.preventDefault();
    this.props.clearTodo();
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.task}
          onChange={this._onChange}
          placeholder="...todo"
        />
        <button type="submit" onClick={this.onSubmit}>
          Add Todo
        </button>
        <button type="submit" onClick={this.onClear}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
