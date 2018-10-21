import React from 'react';

const People = (props) => {
  const { people } = props;
  const peopleList = people.map(person => {
    return(
      <div className="person" key={person.id}>
        <div>Name: { person.name }</div>
        <div>Age: { person.age }</div>
        <div>Occupation: { person.occupation }</div>
      </div>
    )
  })

  return(
    <div className="people-list">
      { peopleList }
    </div>
  )
}

export default People;