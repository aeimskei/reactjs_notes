# Forms with React

This form example is going to be for adding a new person into our list. So, this form is going to need three input fields: name, age and occupation, then a button to add that new person into the list.

Ulitmately, when a user fills the form and submits by clicking on the button, it's going to updated the ```state``` in App.js. When ```state``` is updated, bc is it being passed into ```<People people={ this.state.people }/>``` component, that ```props``` is going to update inside People.js and it'll re-render the JSX template in it.

## Create the Form Component

Create a new component called AddPerson.js. 
Now, should it be a Class-based Component or a UI Component? Well, we need to store the user's input and we'll need to store it locally in the Component's state. So, bc we need that ```state```, this'll have to be a Class-based Component.

```
import React, { Component } from 'react'

class AddPerson extends Component {
  render() {
    return(
      <div>
        <form></form>
      </div>
    )
  }
}
```

Inside the ```<form>``` tag, we don't need an ```action=""``` bc we'll be handling the ```submit``` event manually and we'll attach that later on.

```
<label htmlFor="name"></label>
```

For ```label``` inside the ```<form>```, the ```htemlFor="name"``` is going to look for the input field with the ```id``` of ```name``` and associate that label with that input field. 

```
<input type="text" id="name" onChange={}/>
```

Add the ```id="name"``` and the ```onChange={}``` event and we'll put the function into it later on.

```
import React, { Component } from 'react'

class AddPerson extends Component {
  render() {
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
```

## Create Function to Handle Change

This function will update the ```state``` to store what the user types into the form's input fields.

First, we need to create the ```state``` in this component.

```
state = {
  name: null,
  age: null,
  occupation: null
}
```

Do we need a separate function to handle each input? Actually, we can just have one function to handle it for us.

Let's create a function called ```handleChange```.


<kbd>![alt text](img/under30.png "screenshot")</kbd>