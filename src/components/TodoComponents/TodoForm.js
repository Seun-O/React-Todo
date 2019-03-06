import React, { Component } from "react";

class TodoForm extends Component {
  state = { task: "" };
  _onChange = e => {
    this.setState({ task: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.state.task === "" ? null : this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  onClear = e => {
    e.preventDefault();
    this.props.clearTodo();
  };

  render() {
    return (
      <form className="ui form">
        <div className=" field">
          <input
            type="text"
            value={this.state.task}
            onChange={this._onChange}
            placeholder="...todo"
          />
        </div>
        <div className="ui buttons">
          <button
            style={{ transition: "all .7s ease-out" }}
            className={
              this.state.task === ""
                ? "ui positive disabled"
                : "ui positive button"
            }
            type="submit"
            onClick={this.onSubmit}
          >
            Add Todo
          </button>
          <div className="or" data-text="or" />
          <button
            className="ui negative button"
            type="submit"
            onClick={this.onClear}
          >
            Clear Completed
          </button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
