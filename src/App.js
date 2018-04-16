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
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleButtonClick(event) {
    this.setState({ todos: this.state.todos.concat([ { text: this.state.value, completed: false } ]) });
    this.setState({value: ''});
  }

  handleListClick(event) {
    console.log(event.target);
  }

  render(){
    return (
      <div>
        <InputText value = { this.state.value } onChange = { this.handleInputChange } />
        <Button text = "Add to list" onClick = { this.handleButtonClick }/>
        <List todos = { this.state.todos } handleClick = { this.handleListClick } />
      </div>
    )
  }
}

export default App;
