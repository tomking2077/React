import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Headers from './Headers';
import Modal from './Modal';

class App extends Component {

  constructor() {
    super();
    this.state = {
      temp: "",
      feels_like: "",
      cityName: "",
      weather: "",
      high: "",
      low: "",
      icon: "",
      isRaining: "",
      showModal: true
    }
  }

  componentDidMount() {
    this.getCityWeather("London");

    let elems = document.querySelectorAll('.modal');
    let instances = window.M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);

    if (this.state.weather !== prevState.weather) {
      const isRaining = this.state.weather.includes("rain");
      if (isRaining) {
        this.setState({
          isRaining: "Rain rain go away!!!"
        });
      }
      else {
        this.setState({
          isRaining: ""
        });
      }
    }

    if (this.state.showModal === true && this.state.showModal !== prevState.showModal) {
      let elems = document.querySelectorAll('.modal');
      let instances = window.M.Modal.init(elems);
    }
  }

  searchCity = (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    this.getCityWeather(city);

    console.log(`Form submitted for City: ${city}`);
  }

  getCityWeather = (city) => {
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`;
    const url = 'http://optimum-single0.hosting.blockapps.net/bloc/v2.2/users';
    axios.get(url).then(resp => {
      console.log(resp);
      this.setState({
        temp: resp.data.main.temp,
        feels_like: resp.data.main.feels_like,
        high: resp.data.main.temp_max,
        low: resp.data.main.temp_min,
        weather: resp.data.weather[0].description,
        icon: resp.data.weather[0].icon,
        cityName: resp.data.name
      })
    });
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/wn/${this.state.icon}.png`;

    return (
      <div className="App" >

        <div className="row">
          <div className="col s6 offset-s3">
            <button onClick={this.toggleModal} className="btn">Toggle Modal</button>
            <Headers temp={this.state.temp} isRaining={this.state.isRaining} />
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Details</a>
            <form onSubmit={this.searchCity}>
              <input type="text" id="city" placeholder="Enter a City Name" />
            </form>
          </div>
        </div>

        {this.state.showModal ? <Modal
          iconUrl={iconUrl}
          weather={this.state.weather}
          cityName={this.state.cityName}
          high={this.state.high}
          low={this.state.low} /> : ""}

      </div>
    );
  }
}

export default App;
