
import { mock2, mockData } from "./mock-data";
import React, {Component} from 'react'

class Event extends Component {
  state = {
    show: true,
    buttonTxt: "Show more"
  };

  showEvent = () => {
    if(this.state.show === true)  { 
      this.setState({
        show: false,
        buttonTxt: "Hide"
      });
  }
    else { 
      this.setState({
        show: true,
        buttonTxt: "Show more"
      });
    }
  }
  
  
  render() {
  const {e} = this.props;
  const {buttonTxt, show} = this.state;


    
    return (
    <div>
              <p>
                <b>location: </b><br />
                {e.location}
              </p>
              <a href="#" onClick={this.showEvent}>{buttonTxt}</a>
              <div hidden={show}> 
                <b>description: </b><br />
                {e.description}
              </div>
    </div>
  )
  }
}
export default Event;




