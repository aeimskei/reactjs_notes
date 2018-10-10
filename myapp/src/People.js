import React, { Component } from 'react';

class People extends Component {
  render() {

    const { name, age, occupation } = this.props;

    return(
      <div className="person">
        <div>Name: { name }</div>
        <div>Age: { age }</div>
        <div>Occupation: { occupation }</div>
      </div>
    )
  }
}

export default People;