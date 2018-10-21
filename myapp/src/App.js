import React, { Component } from 'react';
import People from './People';
import AddPerson from './AddPerson';

class App extends Component {
  state = {
    people: [
      {name: 'Rider', age: 27, occupation: 'Student', id: 1},
      {name: 'May', age: 27, occupation: 'Teacher', id: 2},
      {name: 'Kai', age: 32, occupation: 'Designer', id: 3}
    ]
  }

  addPerson = (person) => {
    person.id = Math.random();
    let people = [...this.state.people, person]
    this.setState({
      people: people
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome my friends!</p>
        <People people={ this.state.people }/>
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;

