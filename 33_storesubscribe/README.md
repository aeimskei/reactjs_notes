# Redux Store Subscribe

It's normally done in a component, but we'll do a simple example of subscription and log it into the console when we get a change. This is just to get a basic idea, in a component, it's slightly different.

We need to create a subscription with ```store.subscribe()```, subcribe is a function and it takes in function ```() => {...}``` as a parameter. This is going to fire everytime the ```state``` is changed. So, everytime that happens, let's console.log the state with ```store.getState()``` which is a function and it's going to get the state for us and then log it to the console.

<kbd>![alt text](img/getstate.png "screenshot")</kbd>

It works! We've dispatched the action, then it's passed into the reducer where we update the state and then we've passed back a new state object. Also, because the state has changed and we subscribed to that, then it's going to fire the function inside ```subscribe()``` which we're told it to log a message with the state using ```store.getState()```.

But notice in the log, we only get the tasks and not blogs from the state. The problem is bc when we're returning an object, this is the new state object, so that means we've overwritten the old one. So, it bascially got rid of blogs.

