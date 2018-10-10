# Outputting Lists of Props

Let's try passing a list into this component and then inside that component, we recieve that list of props, cycle through them and output each prop in the People.js component.

Since we're passing a list of props into the component, we don't need to output them twice like:


**App.js**
```
...
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
```

Because they're all going to be going into the same single component.

Also, instead of defining that list as ```props``` on the ```<People />``` component directly, we will define that data in the ```state``` above the ```render()``` method. Create a ```state``` object and then we'll pass that property of the state down into the ```<People />``` component.

First, create a property called ```people``` in the ```state``` object and it's going to be an ```[ ]``` array. Inside that array will have a list of objects with each person's info.

**App.js**
```
...
class App extends Component {
  state = {
    people: [
      {name: 'Rider', age: 27, occupation: 'Student'},
      {name: 'May', age: 27, occupation: 'Teacher'},
      {name: 'Kai', age: 32, occupation: 'Designer'}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Welcome my friends!</p>
        <People />
      </div>
    );
  }
}
```


<kbd>![alt text](img/reuse.png "screenshot")</kbd>