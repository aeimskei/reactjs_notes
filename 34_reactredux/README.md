# React and Redux Setup

In this example, we'll add on to the **routeapp** project example we did previously.

* **Redux package** - a library we use to create the **central store**.

* **React Redux package** - is a library that helps us connect our Redux store to our React application; it's gonna be the thing that allows us to connect our components to the central store of data and interact with it. Think of it as the bridge or the blue between the two, the React application and the Redux store.

Install via ```npm install redux react-redux```

## Create Our Redux Store

Go to **index.js** bc this is where we render our React app. We'll need to import the two packages that we installed to the project. 

We need to import the store from the Redux library with ```import {createStore } from 'redux'``` and then ```const store = createStore``` and invoke that ```createStore``` function with ```()```. Remember at some point, we have to pass in our reducer into the createStore function.

## How Does React Interact with Our Redux Store?

How do we associate the **store** with our React application? To do that, the ```react-redux``` package that we installed helps us with that. What we have to import from that package is a component called ```Provider```.

```
import { Provider } from 'react-redux';
```

* **Provider** - is a component which we'll have to surround and wrap the ```<App />```, the Root Component, then, we'll pass our store into that ```Provider```, and that will provide our application with the ```store``` so that the store can then interact with it at a later point in time.

We'll wrap ```<App />``` with ```<Provider>``` and inside that Provider component, pass in the ```store``` property and pass in the ```store``` that we created as ```const store = createStore()```.

```
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
```
<kbd>![alt text](img/storesubscription.png "screenshot")</kbd>