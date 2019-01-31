import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/to_do_list';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="center yellow-text">To do list</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
