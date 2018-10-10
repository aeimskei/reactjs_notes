import React, { Component } from 'react';

class People extends Component {
  render() {
    console.log(this.props);

    return(
      <div className="person">
        <div>Name: { this.props.name }</div>
        <div>Age: 27</div>
        <div>Occupation: Student</div>
      </div>
    )
  }
}

export default People;