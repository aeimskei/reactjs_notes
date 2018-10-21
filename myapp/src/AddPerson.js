import React, { Component } from 'react'

class AddPerson extends Component {
  state = {
    name: null,
    age: null,
    occupation: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDeafult();
  }
  
  render() {
    return(
      <div>
        <form onSubmit>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={ this.handleChange }/>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={ this.handleChange }/>
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" onChange={ this.handleChange }/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}