# Action Creators

Currently, we have the actions inside our dispatch method. Rather, to have a better separation of concerns, best practice, we need to move our action to another directory/folder.

Separation of concerns will make our code and actions more reusable.

Many developers prefer to use **action creators** to create these actions in separate files.

* **Action creators** - they're just functions and they're responsible for creating action for us. Then, when we call that function, if we were to call it in the dispatch method, it will generate an action for us and return it there to dispatch the action.

This will help us a lot with asynchronous code later on. Also, if you want to dispatch the same kind of action from different locations, you can do that easily as well bc we have one action generator and we don't have to re-type all of our actions each time in use. Instead, we can just call the function.



<kbd>![alt text](img/screenshot.png "screenshot")</kbd>