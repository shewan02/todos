import React, { Component } from 'react';

class List extends Component {

  render(){
  const { todos } = this.props;
    return (
      <ul>
        {todos.map(todo => {
          const completion = todo.completed ? { class: "completed" } : {};
          return <li{ ...completion }> { todo.text } </li>;
        })}
      </ul>
    );
  }
};

export default List;
