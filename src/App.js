import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //All the state of the application will go in here
    //Data of application goes here
    this.state = {
      message: 'React Application'
    };
  }
  //Defined method
  formSubmitted(event) {

    event.preventDefault(); //Prevents default action
    console.log('form submitted');

  }
  render() {
  return (
    <div className="App">
      <h3> {this.state.message}</h3>
      <form onSubmit={this.formSubmitted}>
        <label htmlFor="newTodo">New Todo</label>
        <input id="newTodo" name="newTodo" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
}
export default App;
