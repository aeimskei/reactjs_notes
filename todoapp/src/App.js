import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, task: 'walk the cat'},
      {id: 2, task: 'snuggle with pup and cat'}
    ]
  }
  render() {
    return (
      <div className="App">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
