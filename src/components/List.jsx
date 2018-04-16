import React, { Component } from 'react';
import '../css/completed.css';

class List extends Component {

  render(){
  const { todos, handleClick } = this.props;
    return (
      <ul>
        {todos.map((todo, index) => {
          const completion = todo.completed ? { className: "completed" } : {};
          return <li key = { index } data-access-key = { index } onClick = { handleClick } { ...completion }> { todo.text } </li>;
        })}
      </ul>
    );
  }
};

export default List;
