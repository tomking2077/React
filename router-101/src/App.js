import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import Home from './Home'
import Help from './Help'

const Host = () => <h1>Host</h1>;
const SignUp = () => <h1>Sign up</h1>;
const LogIn = () => <h1>Log in</h1>;

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/" render={() => {
        return <Home title="Hello" />
      }} />
      <Route path="/host" component={Host} />
      <Route path="/help" component={Help} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
    </Router>

  );
}

export default App;