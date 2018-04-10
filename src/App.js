import React, { Component } from 'react';
import InputText from './components/InputText';
import Button from './components/Button';
import List from './components/List';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick(event) {
    this.setState({ todos: this.state.todos.concat([ { text: this.state.value, completed: false } ]) });
    this.setState({value: ''});
  }

  render(){
    return (
      <div>
        <InputText value = { this.state.value } onChange = { this.handleChange } />
        <Button text = "Add to list" onClick = { this.handleClick }/>
        <List todos = { this.state.todos } />
      </div>
    )
  }
}

export default App;
