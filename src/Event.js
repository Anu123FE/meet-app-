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
              <button type="button" onClick={this.showEvent}>{buttonTxt}</button>
              <div hidden={show}> 
                <b>description: </b><br />
                {e.description}
              </div>
    </div>
  )
  }
}
export default Event;




