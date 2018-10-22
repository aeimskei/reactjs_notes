import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    task: ''
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo task:</label> 
          <input type="text" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default AddTodo;