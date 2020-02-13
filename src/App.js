import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //All the state of the application will go in here
    //Data of application goes here
    this.state = {
      message: 'React Application',
      newTodo: ''
    };
  }
  //Defined method
  formSubmitted(event) {

    event.preventDefault(); //Prevents default action
    console.log(this.state.newTodo);

  }

  //Method that logs the latest inut from the user
  newTodoChanged(event) {
    //console.log(event.target.value); //stores the value that is logged into the input
    //passes an object with the properties that are being passed
    this.setState({
      newTodo: event.target.value

    });
  }
  render() {
  return (
    <div className="App">
      <h3> {this.state.message}</h3>
      <form onSubmit={(event) => this.formSubmitted(event)}>
        <label htmlFor="newTodo">New Todo</label>
        <input onChange={(event) => this.newTodoChanged(event)} id="newTodo" name="newTodo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
}
export default App;
