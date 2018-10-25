# Higher Order Components

What exactly are **higher order components**? Essentially, they're functions that wrap around other components and give them "super powers", well extra features.

<kbd>![alt text](img/hof.png "screenshot")</kbd>

For example, with our previous example, we have our Navbar.js component, which we then pass into ur higher order component and that higher order component adds functionality to the Navbar.js component, so that it comes out with extra features or super powers.

## Higher Order Component ```withRouter```

In the previous example we saw higher order components using ```withRouter``` from ```react-router-dom``` package. What this did was add ```props``` to the ```props object``` in the Navbar.js component, so we can have information about the Router inside this component.

## Make Our Own Simple Custom ```HOF```

Let's create a new directory inside of our ```/components``` directly to start the example of creating our own custom HOF inside our ```routeapp``` directory example and call it ```hoc``` and create a new file called ```RandomColor.js```

This HOC is going to randomize the text color inside another component. The HOC is just going to be a function. Then, we'll take in the ```WrappedComponent``` as a parameter.

Before, when we used the ```withRouter()``` higher order component, we wrapped the Navbar component at the bottom on the export line with it. So, when we wrap something like that, we recieve the wrapped component as a parameter like:

**RandomColor.js**
```
import React from 'react'

const RandomColor = (WrappedComponent) => {

}
```

So, if we were to use ```RandomColor``` function on another component, like About, then, we'd receive the About component as a parameter in the ```RandomColor``` function. That would be the wrapped component and we have to return it later on bc especially if we want to return a component with extra features.

In this example, we're gonna make it get a random color or a class which represents a random color, so it can be styled that way. Inside the function, create an array ```const colors = ['red', 'blue', 'yellow', 'orange', 'green']``` and then we want to randomize which color we want to choose.

