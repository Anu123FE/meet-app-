import React, { Component } from "react";

class Event extends Component {
  state = {
    show: false
  }

  showEvent(){
    if (this.state.show === true ){
      this.setState({
        show: false
      })
    }
    else {
      this.setState({
        show: true
      })
    }
    
  }
  render() {
    return <div>
      <ul>
        {
          // Change array to your mockdata
          [
            {
              description: "event 1",
              location: "berlin"
            },
            {
              description: "event 2",
              location: "london"
            }
          ].map((i,e) =>
            <li key={i} hidden={this.state.show} onClick={this.showEvent}>
              <p>
                {e.description}
                {e.location}
              </p>
            </li>
            )
        }
      </ul>
    </div>;
  }
}
export default Event;