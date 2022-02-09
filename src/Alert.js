import React, { Component } from 'react';

export default class Alert extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.color = null;
  }

  style =  {
      color: this.props.color,
    };

  render() {
    return (
      <div className="Alert">
        <p style={this.style}>{this.props.text}</p>
      </div>
    );
  }
}


