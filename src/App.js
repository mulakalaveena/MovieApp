import React, { Component } from 'react';
import './App.css';
import  HomePage  from './components/HomePage/HomePage';
import Search from './components/Search/Search';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search/>
        </header>
        <HomePage/>
      </div>
    );
  }
}

export default App;
