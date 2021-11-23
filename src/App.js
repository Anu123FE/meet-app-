import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mock2, mockData } from './mock-data';
import { extractLocations } from './api';

class App extends Component {
  state = {
    locations : extractLocations(mockData)
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
