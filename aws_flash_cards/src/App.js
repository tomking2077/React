import React, { Component } from 'react';
import './App.css';
import Quizbar from './components/QuizBar.js';
import FlashCard from './components/FlashCard.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardStyle: "Random",
      ready: false,
    }
  }

  userChoice = (_cardStyle) => {
    this.setState({
      cardStyle: _cardStyle,
      ready: false
    });
  }


  nowReady = () => {
    this.setState({
      ready: true
    });
  }

  render() {
    //console.log(this.state.cardStyle);
    return (
      <div className="App align-items-center d-flex" >
        <div className="container">
          <Quizbar userChoice={this.userChoice} />
          <FlashCard cardStyle={this.state.cardStyle} nowReady={this.nowReady} ready={this.state.ready} />
        </div>
      </div>
    );
  }
}

export default App;
