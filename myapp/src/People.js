import React, { Component } from 'react';

class People extends Component {
  render() {
    
    const { people } = this.props;
    const peopleList = people.map(person => {
      return(
        <div className="person">
          <div>Name: { person.name }</div>
          <div>Age: { person.age }</div>
          <div>Occupation: { person.occupation }</div>
        </div>
      )
    })

    return(

    )
  }
}

export default People;