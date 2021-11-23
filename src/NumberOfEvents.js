import React, { Component } from 'react';

class NumberOfEvents extends React.Component {
    state={
        numberofevents: 10
    }
    handleInput = (evt) => {
        this.setState({
            numberofevents: evt.target.value
        })
        this.props.updateNumberOfEvents(this.state.numberofevents);
    }
    render() { 
        return <div>
            NumberofEvents <input value ={this.state.numberofevents} type="text" onChange={this.handleInput}/>
        </div>;
    }

}
 
export default NumberOfEvents;