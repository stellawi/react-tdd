import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (<button
      value={this.props.location ? this.props.location : 'none'}
      className="location-button"
      onClick={this.props.handleClick}>
      {this.props.location ? this.props.location : 'All Location'}
    </button>)
  }
}

export default Button;