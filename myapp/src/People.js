import React from 'react';
import './People.css';

const People = ({people, deletePerson}) => {

  // // if statement version
  // const peopleList = people.map(person => {
  //   if (person.age < 30) {
  //     return(
  //       <div className="person" key={person.id}>
  //         <div>Name: { person.name }</div>
  //         <div>Age: { person.age }</div>
  //         <div>Occupation: { person.occupation }</div>
  //       </div>
  //     )
  //   } else {
  //     return null
  //   }
  // })

  // // Ternerary Operator version
  // const peopleList = people.map(person => {
  //   return person.age < 30 ? (
  //     <div className="person" key={person.id}>
  //       <div>Name: { person.name }</div>
  //       <div>Age: { person.age }</div>
  //       <div>Occupation: { person.occupation }</div>
  //     </div>
  //   ) : null
  // })

  return(
    <div className="people-list">
      {
        people.map(person => {
          return person.age < 30 ? (
            <div className="person" key={person.id}>
              <div>Name: { person.name }</div>
              <div>Age: { person.age }</div>
              <div>Occupation: { person.occupation }</div>
              <button onClick={() => {deletePerson(person.id)}}>Delete person</button>
            </div>
          ) : null
        })
      }
    </div>
  )
}

export default People;