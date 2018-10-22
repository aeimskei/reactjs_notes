import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      {id: 1, task: 'walk the cat'},
      {id: 2, task: 'snuggle with pup and cat'}
    ]
  }

  deleteTodo = (id) => {
    // console.log(id); // test
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      // todos: todos // key and value have the same name
      todos // with ES6 shortening bc key and value have the same name
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
