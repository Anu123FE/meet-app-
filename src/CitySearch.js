import React, { Component } from 'react';
import EventList from './EventList';
import { mockData } from './mock-data';
import NumberOfEvents from './NumberOfEvents';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        events: [],
        numberOfEvent: 10
      }
      updateNumberOfEvents = (num) => {
        this.setState({
          numberOfEvent: num
        })
        this.setState({
          events: mockData.filter( data  => data.location == this.state.query).slice(0, this.state.numberOfEvent)
        })
      }
      handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
          console.log(location)
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
          });
          this.setState({
            query: value,
            suggestions,
           
          });
          console.log(this.state.event)
        };
        handleItemClicked = (suggestion) => {
          this.setState({
            query: suggestion,
            events: mockData.filter( data  => data.location == suggestion)
          });

        }
  render() {
    return (
      <div className="CitySearch">
          Search for a city: <input
             type="text"
             className='city'
             onChange={this.handleInputChanged}
             value={this.state.query}
             /> 
            <ul className="suggestions">
               {this.state.suggestions.map((suggestion) => (
                 <li
                 key={suggestion}
                 onClick={() => this.handleItemClicked(suggestion)}
               >{suggestion}</li>
             ))}
            <li key='all'>
              <b>See all cities</b>
            </li>
           </ul>
           <br/><br/>
              <NumberOfEvents  updateNumberOfEvents = {this.updateNumberOfEvents} />
           <hr width="100%"></hr>
           <br/>
           <EventList events={this.state.events} />
      </div>
    );
  }
}

export default CitySearch;