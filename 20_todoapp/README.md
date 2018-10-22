# Todo App with React

Let's bundle together everything that we've learned so far into a simple Todo App with React.

## Create a new React App

We'll set this up using ```create-react-app```, name it as ```todoapp``` and then create a couple of components to list some Todos. Then afterwards, we'll hook up all the ```events``` so that we can add and delete Todos.

## Add Materialize CSS library to style

For styling this project, we're going to use **Materialize CSS**, which is a CSS library, we'll use its Classes to stylize our project. We're not gonna make anything too stylish, so just use the CDN link on the Get Started page. We'll add the link inside our ```index.html``` which is in the ```public``` directory. Add it above the ```<title>``` tag in the ```<head>``` tag.

Link: https://materializecss.com/getting-started.html

## Get Rid of Some Files in the ```src``` Directory

* Remove: App.test.js, App.css and logo.svg
* Remember to go into App.js, the Root Component, and remove references to those files
* Also delete the elements inside the ```<div>``` tag. Only leave the ```<div>``` tags bc React requires it as root

**App.js**
```
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
```
## Set ```state``` inside this Root Component

App,js is our Root Component and it is also a Container Component bc it's going to be where we store the ```state``` of our application. We're going to store the Todos inside the ```state``` of this Component.

```
state = {
  todos: [
    {id: 1, task: 'walk the cat'},
    {id: 2, task: 'snuggle with pup and cat'}
  ]
}
```

## Create JSX Template to Display Output of Todos Items

We should create a separate component that is responsible for listing individual Todos. First, go into the ```src``` directory and create a new file calles Todos.js. It's going to be Functional/UI Component. We don't need to store ```state``` here bc it's already registered in App.js. Rather, we'll pass it down from App.js to Todos.js as ```props```.

**Todos.js**
```
import React from 'react'

const Todos = () => {
  return(
    <div className="todos collection">
      
    </div>
  )
}
```

* Need to ```return``` JSX template
* Give className of todos
* className collection is in reference to Materialize's class

So, we need to pass ```todos``` from the App.js Component in Todo.js and we'll do that with ```props```. We need to ```import Todos from './Todos'``` Todos.js into App.js. Now, we can nest the ```props``` inside ```<Todo />``` in the ```render()``` method.

<kbd>![alt text](img/stateasprops.png "screenshot")</kbd>

Inside Todos.js, we can now access the ```state``` from App.js through ```props``` that was injected when we nested ```<Todos />``` with a prop name into the ```render()``` method in App.js. 

To do that, we'll need to have props as the parameter in ```const Todos```. We'll it the desctructured way and we're grabbing the ```todos``` of that props object. So, now we can use it below in the ```return()``` method.

Because we're getting a list, we need to ```map()``` through that list and then return some JSX for each individual item in that list and then output that list. We'll do that logic above the ```return``` statement.

```const todoList = todos.length``` what we're doing here is to check the length. If we don't have a length or todos, then we don't want to show it or we want to show a different message or set of content. If we do have todos, then want to show the actual todo list. We'll use the **ternerary operator** to check whether it is true or false. False if it is ```0```, true if we have some todos ```const todoList = todos.length ? () : ()```

We'll need to return a JSX template for each. We need a ```<div>``` with Materializes' classname ```collection-item``` to help us style our lists. Inside out div, we want to output our todos in a ```<span>``` tag and use the ```{...}``` to dynamically insert ```todo.task``` inside the cruly braces. We also need to output the ```todo.id``` as key for React. Remember, React expects a unique key on every surrounding element that we return inside this ```map()``` function when we output them to the browser, so that it can identify each individual item.

Then, you'll output it in the ```return()```

**Todos.js**
```
const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return(
        <div className="collection-item" key={todo.id}>
          <span>{todo.task}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todos left!</p>
  )

  return(
    <div className="todos collection">
      { todoList }
    </div>
  )
}
```

<kbd>![alt text](img/displaytodos.png "screenshot")</kbd>

Improve styling of list by adding ```container``` class.

```
render() {
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos={this.state.todos} />
    </div>
  );
}
```

<kbd>![alt text](img/addcontainer.png "screenshot")</kbd>
