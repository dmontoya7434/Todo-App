import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //All the state of the application will go in here
    //Data of application goes here
    this.state = {
      message: 'Hello World!!'
    }
  }
  render() {
  return (
    <div className="App">
      <h3> {this.state.message}</h3>
      <form>
        <label htmlFor="newTodo">New Todo</label>
        <input id="newTodo" name="newTodo" />
      </form>
    </div>
  );
}
}
export default App;
