import React, { Component } from 'react'

class AddPerson extends Component {
  render() {
    state = {
      name: null,
      age: null,
      occupation: null
    }

    

    return(
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={}/>
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={}/>
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" onChange={}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}