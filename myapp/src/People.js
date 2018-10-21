import React from 'react';

const People = ({people}) => {
  const peopleList = people.map(person => {
    if (person.age < 30) {
      return(
        <div className="person" key={person.id}>
          <div>Name: { person.name }</div>
          <div>Age: { person.age }</div>
          <div>Occupation: { person.occupation }</div>
        </div>
      )
    } else {
      return null
    }
  })

  return(
    <div className="people-list">
      { peopleList }
    </div>
  )
}

export default People;