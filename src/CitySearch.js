import React, { Component } from 'react';
import EventList from './EventList';
import { mockData } from './mock-data';
import NumberOfEvents from './NumberOfEvents';
import { InfoAlert } from './InfoAlert';

class CitySearch extends Component {
    state = {
        query: '',
        suggestions: [],
        events: [],
        infoText: '',
      }

      componentDidMount() {
        this.setState({
          events: mockData
        });
        
        if(!navigator.onLine){
          console.log("We're offline!")
          this.setState({
            infoText: 'You are offline! Data is being pulled from cache!',
            events: JSON.parse(localStorage.getItem('events'))
          })
        }
 
      }

      updateNumberOfEvents = (num) => {
        this.setState({
          events: mockData.filter( data  => data.location === this.state.query).slice(0, num)
        })
      }
    
      handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        console.log(suggestions)
        if (!suggestions || suggestions.length === 0) {
          this.setState({
            infoText: 'No data found for that location!'
          }) 
         }
       else {
        this.setState({
          infoText: ''
        }) 
       }
        
       this.setState({
        query: value,
        suggestions,
      });

        };
        handleItemClicked = (suggestion) => {
          const evts = mockData.filter( data  => data.location === suggestion);
            this.setState({
              query: suggestion,
              events: evts 
            });
        }
  render() {
    return (
      <div className="CitySearch">
        <h1 className="Title">Meet-App</h1>
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
              <InfoAlert text={this.state.infoText} color={"blue"} />
            </li>
           </ul>
           <br/><br/>
              <NumberOfEvents queryText={this.state.query}  updateNumberOfEvents = {this.updateNumberOfEvents} /> <font size="1.5"><i>Type a number and press enter</i></font>
           <hr width="100%"></hr>
           <br/>
           <EventList events={this.state.events} />
      </div>
    );
  }
}

export default CitySearch;