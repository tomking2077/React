import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './utility/NavBar';
import Home from './pages/Home/Home';

class App extends Component {

  render() {
    return (
      <Router>
        <Route path="/" Component={NavBar} />
        <Route exact path="/" Component={Home} />
        <div className="App" >
          <h1>Sanity Check</h1>
        </div>
      </Router>
    );
  }

}

export default App;
