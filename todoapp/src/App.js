import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

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

  addTodo = (todo) => {
    todo.id = Math.random(); // create unqiue id (kinda)
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
