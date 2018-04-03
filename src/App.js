import React, { Component } from 'react';
import './styles/App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
