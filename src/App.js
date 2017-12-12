import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Repo from './components/repo.js'

class App extends Component {
  state = {
    textContent: 'test'
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Repo textContent={this.state.textContent}/>
      </div>
    );
  }
}

export default App;
