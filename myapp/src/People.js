import React, { Component } from 'react';

class People extends Component {
  render() {
    return(
      <div className="person">
        <div>Name: { this.props.name }</div>
        <div>Age: { this.props.age }</div>
        <div>Occupation: { this.props.occupation }</div>
      </div>
    )
  }
}

export default People;