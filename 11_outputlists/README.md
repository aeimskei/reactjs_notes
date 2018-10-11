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

First, create a property called ```people``` in the ```state``` object and it's going to be an ```[ ]``` array. Inside that array will have a list of objects with each person's info. Remember to include an ```id``` property for each person.

**App.js**
```
...
class App extends Component {
  state = {
    people: [
      {name: 'Rider', age: 27, occupation: 'Student', id: 1},
      {name: 'May', age: 27, occupation: 'Teacher', id: 2},
      {name: 'Kai', age: 32, occupation: 'Designer', id: 3}
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

## Pass Array into as Props

So, each array item is an object, we're gonna pass this array of objects down into the ```<People />``` component inside the ```render()``` method. We will recieve that array on People.js as a prop and we will cycle through it and output some HTML for each individual person.

First, in App.js, let's pass the array through to ```<People />``` component as ```prop```. We can call our newly created prop ```people``` and set it equal to ```this.state.people```. All we're doing is referencing the array of objects in the ```state``` earlier.

<kbd>![alt text](img/refstatetoprop.png "screenshot")</kbd>

## Have Access to People Array in Another Component

Inside People.js, we will have access to people array via creating a variable and grabbing that data.

**People.js**
```
const people = this.props.people;
```

is the same as the destructured version:

```
const { people } = this.props;
```

So, we grab the ```people``` property with ```const { people }``` off the ```this.props``` object, so we have that array of ```people``` from App.js stored in here now.

Next, we want to output it to the DOM.

## Output Data into the DOM with ```map()``` Method

We want to cycle through that list of people and ouptut some HTML for each individual one, which looks like this template:

**People.js**
```
<div className="person">
  <div>Name: { name }</div>
  <div>Age: { age }</div>
  <div>Occupation: { occupation }</div>
</div>
```

To do it, we need to use the JavaScript method, **map()**.

  * **```map()```** - it takes an array and it maps that array to a new array.

It's essentially what we want to do. We want to take the ```{ people }``` that we grabbed and map it to a new array, which will be an array of HTML elements, one for each individual person. Then, we can ouput that array of code in the template.

## Map a New Array of HTML Template

First, creaet a new constant variable, let's call it ```peopleList``` where we will store all our new array full of HTML elements inside. We will set that to ```people.map()``` and inside that map parantheses, we'll take each individual ```person``` as we cycle through it, then use the **arrow function** ```=>``` and we perform a function on that individual ```person```. 

We need to return a value inside this function, this ```return``` value is the element whcih is popped into the new array of ```peopleList```. So, we need to return some **JSX** code, essentially HTML, for each individual person, it'll be the template for that individual person.

```
const peopleList = people.map(person => {
  return(
    <div className="person">
      <div>Name: { name }</div>
      <div>Age: { age }</div>
      <div>Occupation: { occupation }</div>
    </div>
  )
})
```

We need to reference ```person``` in the ```map()``` method bc this is the item that we're cycling through each time we iterate. So change it to:

```
const peopleList = people.map(person => {
  return(
    <div className="person">
      <div>Name: { person.name }</div>
      <div>Age: { person.age }</div>
      <div>Occupation: { person.occupation }</div>
    </div>
  )
})
```

Now, all we have left to do is output our newly created array through map below in ```return()```. First, we'll need to create root ```<div>``` as ```<div className="people-list"></div>```. Inside that ```<div>```, all we're gonna do is output the ```peopleList``` array bc it's gonna be the list of element or JSX template we made for each individual person.

We will output it in our ```{ }``` curly braces bc this is dynamic content we're outputting. Inside that curly braces put in the variable name for the ```peopleList``` like ```{ peopleList }```. React and JSX is going to know that we want to output the JSX template sequentially.

**People.js**
```
class People extends Component {
  render() {
    
    const { people } = this.props;
    const peopleList = people.map(person => {
      return(
        <div className="person">
          <div>Name: { person.name }</div>
          <div>Age: { person.age }</div>
          <div>Occupation: { person.occupation }</div>
        </div>
      )
    })

    return(
      <div className="people-list">
        { peopleList }
      </div>
    )
  }
}
```

<kbd>![alt text](img/dynoutputdata.png "screenshot")</kbd>


It works, but when you look in the console in DevTools, you'll see that we're getting an error.

## Needs Unique ID for Items

<kbd>![alt text](img/warningerr.png "screenshot")</kbd>

What this error means is that each:

```
...
<div className="person">
  <div>Name: { person.name }</div>
  <div>Age: { person.age }</div>
  <div>Occupation: { person.occupation }</div>
</div>
```

Needs to have a **unique key identifier** for this element block of elements. It's bc React need to identify which person or item this is. If you think about it, when we change data from state, React is going to update the template and iterate through the list to figure out which person was removed/updated and so React can make those changes to the DOM.

To do that, all we need to do is add ```key={}``` key is equal to something and that something has to be unique for that person or item. That something is going to be the ```id``` we need to add in the ```state``` in App.js.

**App.js**
```
...
state = {
  people: [
    {name: 'Rider', age: 27, occupation: 'Student', id: 1},
    {name: 'May', age: 27, occupation: 'Teacher'}, id: 2,
    {name: 'Kai', age: 32, occupation: 'Designer', id: 3}
  ]
}
```

So in People.js, we need to add ```key={ person.id }``` in our ```<div className="person">```

**People.js**
```
...
    const peopleList = people.map(person => {
      return(
        <div className="person" key={person.id}>
          <div>Name: { person.name }</div>
          <div>Age: { person.age }</div>
          <div>Occupation: { person.occupation }</div>
        </div>
      )
    })
```

<kbd>![alt text](img/uniqueid.png "screenshot")</kbd>

There you go, no more warning or error in the console.

## Summary

So that's how you can cycle through data. We get the original array, then map through that array and receive each individual item in the array, to create a new list array, then we perform a function for each individual item, inside that function, we return some JSX template that we want to output for each item, it cycles through those and stores that JSX in a new array list (create a new variable to store it), and then finally we output the items with templates below in the return() method. That is how we iterate or loop through data and output in React.