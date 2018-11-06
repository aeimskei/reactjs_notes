# Map Dispatch to Props

What if we want to change the ```state``` like deleting one of the posts?

Then, we need to interact with the state from the component.

<kbd>![alt text](img/reduxchangedata.png "screenshot")</kbd>

Looking at our diagram, we have our state in the central store and we've already passed our data via the props to this component with the function ```mapStateToProps```.

If we want to make a change to the state, we have to **dispatch** and **action** from the component. That action is going to contain a **type**, eg. add post or delete post. Also, it can contain an option **payload**.

* So, if we're deleting a post, the payload could be the id of the post that we want to delete. Then, that delete action is dispatched to the reducer, the reducer takes the action, checks the type of action, takes in the payload, which in the case the post id that we want to delete from the state, and it makes that change to the central state. Then, when that changes, we get the updated props inside the component.

## How to Dispatch an Action from Component

Similar to our ```mapStateToProps``` function, this time, we'll have to ```mapDispatchToProps```.

* ```mapDispatchToProps``` - map our dispatches to our props, so that we can call them from our component

We'll create this function in our Post.js component.

It takes in a parameter, the ```disptach``` method. We're going to match dispatch to the component's props (different from our previous simple redux example with ```store.dispatch({type: ...})```). Instead, inside the function, we can say ```dispatch({})``` and the action inside the curly braces, we don't have to say ```store.dispatch({type:...})``` anymore.

What we want to do actually, is return an object and this object is going to represent similar to the ```mapStateToProps``` return object. But, in ```mapDispatchToProps```, we want to delete the matched post.

With ```deletePost```, we want it to dispatch an action, so it's going to be a function and it'll take a parameter of ```id``` of the post that we want to delete.

**Post.js**
```
deletePost: (id) => { dispatch({type: 'DELETE_POST', }) }
```

And the additional payload we want to send is the ```id```, so we need to create a property called id and set it to the id we receive inside the function when we call it.

**Post.js**
```
deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
```

<kbd>![alt text](img/recieveid.png "screenshot")</kbd>

What we're doing is we're dispatching this action ```dispatch({type: 'DELETE_POST', id: id})``` when we call the ```deletePost``` function. This ```deletePost``` function is going to be attached to our props, so we can use it inside our component.

Before we do that, remember to pass ```mapDispatchToProps``` to the ```connect``` function down on the export line code. Make sure it's in this order: ```connect(mapStateToProps, mapDispatchToProps)(ComponentName)```.

