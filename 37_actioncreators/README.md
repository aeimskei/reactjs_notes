# Action Creators

Currently, we have the actions inside our dispatch method. Rather, to have a better separation of concerns, best practice, we need to move our action to another directory/folder.

Separation of concerns will make our code and actions more reusable.

Many developers prefer to use **action creators** to create these actions in separate files.

* **Action creators** - they're just functions and they're responsible for creating action for us. Then, when we call that function, if we were to call it in the dispatch method, it will generate an action for us and return it there to dispatch the action.

This will help us a lot with asynchronous code later on. Also, if you want to dispatch the same kind of action from different locations, you can do that easily as well bc we have one action generator and we don't have to re-type all of our actions each time in use. Instead, we can just call the function.

## Create Action Creator Function

* Create an ```actions``` folder/directory inside the ```src``` directory

* Inside the ```actions``` folder, create a new file and call it ```postActions.js```, so it'll be for anything that has to do with a post would go in here


In this example, we're just going to create one action to begin with, an action to delete a post.

* In postAction.js, we'll say ```export``` first bc we want to export this, then ```const``` and then the function name called ```deletePost``` bc that's the action we want to do. It's gonna be an arrow function and we're taking ```id``` as a parameter bc we need to include it in this action.

* Inside, all that we return is an object that represents the action that we're returning. It has a ```type``` with ````'DELETE_POST'```. It's also going to have an ```id``` property equal to the ```id``` that we receive through the parameter of the function.

**postAction.js**
```
export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id: id
  }
}
```

## Import into Component

Go to Post.js component and import the **action creator** file at the top. Then used this code to use the importer action creator function ```deletePost: (id) => { dispatch(deletePost()) }``` inside the ```mapDispatchToProps``` function. Remember to pass in ```id``` inside the ```deletePost()``` function bc our action creator expects that id.

All this now should work the same as the previous version.

## Summary

The more you use dispatches in different components, the more you'll be using action creators in this separation of concerns format. Especially when it comes to more complex things like asynchronous tasks to go out and grab some external data.