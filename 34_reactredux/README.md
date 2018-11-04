# React and Redux Setup

In this example, we'll add on to the **routeapp** project example we did previously.

* **Redux package** - a library we use to create the **central store**.

* **React Redux package** - is a library that helps us connect our Redux store to our React application; it's gonna be the thing that allows us to connect our components to the central store of data and interact with it. Think of it as the bridge or the blue between the two, the React application and the Redux store.

Install via ```npm install redux react-redux```

## Create Our Redux Store

Go to **index.js** bc this is where we render our React app. We'll need to import the two packages that we installed to the project. 

We need to import the store from the Redux library with ```import {createStore } from 'redux'``` and then ```const store = createStore``` and invoke that ```createStore``` function with ```()```. Remember at some point, we have to pass in our reducer into the createStore function.

## How Does React Interact with Our Redux Store?




<kbd>![alt text](img/storesubscription.png "screenshot")</kbd>