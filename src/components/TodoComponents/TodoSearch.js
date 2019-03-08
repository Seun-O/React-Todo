import React, { Component } from "react";

export class TodoSearch extends Component {
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        className={
          this.props.search === "" ? "ui icon input" : "ui icon input loading"
        }
      >
        <input
          type="text"
          placeholder="search..."
          onChange={this.props.todoSearch}
          value={this.props.search}
        />
        <i className="search icon" />
      </div>
    );
  }
}
