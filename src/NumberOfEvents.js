import React from 'react';
import PropTypes from 'prop-types';
import { InfoAlert } from './Alert';

class NumberOfEvents extends React.Component {
    state = { 
        numberofevents: 10,
        infoText: ''
    }
    handleInput = (evt) => {
        this.setState({
            numberofevents: evt.target.value
        })
    }
    updateNumOfEvt = (e) => {
        if (e.key === 'Enter') {
            if (!this.state.numberofevents) {
                this.setState({
                    infoText: 'please enter a value for number of events!'
                  }) 
            }
            else {
                this.setState({
                    infoText: ''
                  }) 
            }
        this.props.updateNumberOfEvents(this.state.numberofevents)
        }
    }
    render() { 
        return <div>
             <InfoAlert text={this.state.infoText} color={"red"} />
            NumberofEvents <input value ={this.state.numberofevents} type="text" onChange={this.handleInput} onKeyDown={this.updateNumOfEvt}/>
        </div>;
    }

}

NumberOfEvents.propTypes = {
    updateNumberOfEvents: PropTypes.func
  };
 
export default NumberOfEvents;

