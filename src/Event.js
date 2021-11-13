import React, { Component } from "react";
import { mock2, mockData } from "./mock-data";

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
          mockData.map((e) =>
            <li key={e.id} hidden={this.state.show} onClick={this.showEvent}>
              <p>
                <b>description: </b><br />
                {e.description}
                </p>
                <p>
                <b>location: </b><br />
                {e.location}
              </p>
              <hr />
            </li>
            )
        }
      </ul>
    </div>;
  }
}
export default Event;