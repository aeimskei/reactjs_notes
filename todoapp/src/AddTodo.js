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

  render() {
    return(
      <div>
        <form onSubmit={}>
          <label>Add new todo task:</label> 
          <input type="text" onChange={this.handelChange}/>
        </form>
      </div>
    )
  }
}

export default AddTodo;