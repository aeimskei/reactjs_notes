import React, { Component } from 'react';
import People from './People';

class App extends Component {
  state = {
    people: [
      {name: 'Rider', age: 27, occupation: 'Student'},
      {name: 'May', age: 27, occupation: 'Teacher'},
      {name: 'Kai', age: 32, occupation: 'Designer'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome my friends!</p>
        <People people={ this.state.people }/>
      </div>
    );
  }
}

export default App;
