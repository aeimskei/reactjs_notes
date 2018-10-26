# Using Axios

Usually with a website we want to be grabbing data and showing it on our website. Rhis could be from some kind of REST API on your server of some other third party API, or a service like Firbase that goes directly to the database.

In this example to practice, we'll use a third party REST API to get some dummy data from. We're gonna use JSON Placeholder: https://jsonplaceholder.typicode.com/

JSON Placeholder will give us access to some REST API endpoints to receive some dummy data.

## How to Get and Use the Data - Using Axios

We're gonna use **Axios** an HTTP Request Library. We'll need to install it as a separate package to our continuing ```routeapp``` example. In the terminal ```npm install axios```

Now, we can use Axios inside a component, to go out and fetch data from an external source. 

## Explain Use ```componentDidMount``` and Axios to Grab Data

Remember when we talked about **lifecycle hooks** a good place to go out and get external data was in the lifecycle hook ```componentDidMount```, this is when the component has then mounted to the DOM.

So, we're gonna use ```componentDidMount``` lifecycle hook to go out and grab 
data using Axios.

## Convert from Functional to Class-based Component

To use a lifecycle hook inside a component, we have to convert the component into a **Class-based Component** bc functional components cannot use the lifecycle hooks.

We'll work with the Home.js component, let's convert it from a functional component to a Class-based component in order to use lifecyle hook of ```componentDidMount```.

**Home.js** - functional component version
```
import React from 'react'

const Home = () => {
  return(
    <div className="container">
      <h4 className="center">Home</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat dolorum eligendi quae magni, perspiciatis deserunt accusamus dolores at. Enim voluptas quia nulla magnam excepturi totam vitae molestiae deserunt iste?</p>
    </div>
  )
}

export default Home
```

To convert, first, we'll need the import ```{ Component }``` from React and get rid of ```const Home = () =>``` and change it to ```class Home extends Component```.

Next, we have to embed our ```return(...)``` JSX in a ```render()``` method.

**Home.js** - Class-based component version
```
import React, { Component }from 'react'

class Home extends Component {
  render() {
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat dolorum eligendi quae magni, perspiciatis deserunt accusamus dolores at. Enim voluptas quia nulla magnam excepturi totam vitae molestiae deserunt iste?</p>
      </div>
    )
  }
}

export default Home
```

## Create ```componentDidMount()```




<kbd>![alt text](img/randomcolortext.png "screenshot")</kbd>