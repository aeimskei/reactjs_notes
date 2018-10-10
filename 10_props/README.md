# Props

Now, we're at the stage where we have two components: App.js is the **Root** or also called **Parent** Component, and the People.js is the **Child** component bc it's sitting inside the parent component.

We've already seen ```state``` to store local data for a component, but now we'll learn about ```props``` and props are a way for us to pass data from one component like the parent component to a child component. So, we can pass data from App.js to People.js component, we can do it instead of hard-coding like what we did earlier with info data on name, age and occupation in People component.

Imagine we want to pass the ```person``` data ```<div>Name: Rider</div><div>Age: 27</div><div>Occupation: Student</div>``` from the parent component of App.js to the child component of People.js, then render that data, we can do that by using props.

* **```props```** - is just short for properties

## Create ```props``` with ```values``` to Pass Down from Parent to Child Component

We pass those ```props``` on the ```<People />``` component nested inside App.js where output into the JSX template. So all we do is make up property names and give those values to pass them down into the App.js component. For example, we can pass down a ```name``` prop with a string ```name="Rider"```. You can add more properties like ```age="27" occupation="Student"```. What we're doing here is just making up three property names and giving them values. Now, those values are being passed into this ```<People />``` component.

**App.js**
```
import React, { Component } from 'react';
import People from './People';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome my friends!</p>
        <People name="Rider" age="27" occupation="Student" />
      </div>
    );
  }
}

export default App;
```

## How to Access Class-based Components Use in Child Component

We access those in Class-based components automatically from ```this.props```. ```this``` references in the component and ```.props``` is to access the props object on this component.

Let's test it out by logging inside the ```render()``` method bc after all, it's just a JavaScript function and we can add JavaScript in here.

* **```this.props```** - inside the render method, when console.log, is going to give us an object all of the different ```props`` that we've passed down from App.js component or whatever parent component

**People.js**
```
import React, { Component } from 'react';

class People extends Component {
  render() {
    console.log(this.props);

    return(
      <div className="person">
        <div>Name: Rider</div>
        <div>Age: 27</div>
        <div>Occupation: Student</div>
      </div>
    )
  }
}

export default People;
```

You'll see logged into the console is this object with the three ```props``` we passed down from the parent component, App.js.

<kbd>![alt text](img/logthisobj.png "screenshot")</kbd>

## Output ```props``` from Parent Componet to Child Component JSX Template

Now, let's output those ```props``` into our People.js JSX tempate.

* Use curly braces ```{ }``` to output dynamic content,
* then inside the curly braces, ```this.props``` and ```.whatevername```
* like ```this.props.name``` from the prop name we wrote in App.js

<kbd>![alt text](img/apptopeople.png "screenshot")</kbd>

**People.js**
```
import React, { Component } from 'react';

class People extends Component {
  render() {
    return(
      <div className="person">
        <div>Name: { this.props.name }</div>
        <div>Age: { this.props.age }</div>
        <div>Occupation: { this.props.occupation }</div>
      </div>
    )
  }
}

export default People;
```

<kbd>![alt text](img/dynprops.png "screenshot")</kbd>

Now, you can see that we're dynamically outputting the props from the parent component, no more hardocoding.

## Destructuring: A Simpler Way / Shorter to Grab ```props```

* **```Desctructuring```** - means we can just grab ```property names``` and store them in variables called the same thing

Like ```const { name, age, occuption }``` each variable from ```this.props``` and this is how we do **destructuring**.

```
const { name, age, occuption } = this.props
```

All this is doing is pretty much storing the name of ```this.props``` in a variable. Like grab the ```name``` property of ```this.props``` and store it in a variable called ```name```, etc.

The names inside ```const { }``` has to be the same as what we get in ```this.props```.

More about destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

Now that we've already grabbed the properties and stored in ```const { }```, we can just call the directly.

**People.js**
```
import React, { Component } from 'react';

class People extends Component {
  render() {

    const { name, age, occupation } = this.props;

    return(
      <div className="person">
        <div>Name: { name }</div>
        <div>Age: { age }</div>
        <div>Occupation: { occupation }</div>
      </div>
    )
  }
}

export default People;
```

You'll see that it'll run and still output the same as our previous version.

Why do all of this? Well, it makes our component extremely **reusable** bc we didn't hard-code the data in. So if we were to reuse the ```<People />``` component again in App.js - copy and paste below with different set of props.

**App.js**
```
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
```

See, we can reuse the People component. The template and structure is the same, but the data is different.

<kbd>![alt text](img/reuse.png "screenshot")</kbd>

This is how we pass props down into components and then output those props in those components.

Well, what if we want to pass a list of more different data of People down? We'll learn that next, how to pass a list and cycle through that list inside this component and output to the DOM.