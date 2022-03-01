import React, { Component } from 'react';
import './App.css';
import CitySearch from './CitySearch';
import { mockData } from './mock-data';
import { extractLocations } from './api';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, checkToken, getAccessToken } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    locations : extractLocations(mockData),
    showWelcomeScreen: undefined
  }
  componentDidMount()
  {
    localStorage.setItem('events', JSON.stringify(mockData))
  }
  render() {
    
    return (
      <div className="App">
        <CitySearch locations={this.state.locations}/>

      </div>
    );
  }
}

export default App;
