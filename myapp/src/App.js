import React, { Component } from 'react';
import People from './People';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome my friends!</p>
        <People name="Rider" age="27" occupation="Student" />
        <br />
        <People name="May" age="27" occupation="Teacher" />
      </div>
    );
  }
}

export default App;
