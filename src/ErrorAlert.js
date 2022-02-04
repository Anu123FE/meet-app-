import React, { Component } from 'react';

export default class ErrorAlert extends Component {
  constructor(props) {
    super(props);
  }

  style =  {
      color:'red',
    };

  render() {
    return (
      <div className="Alert">
        <p style={this.style}>{this.props.text}</p>
      </div>
    );
  }
}


