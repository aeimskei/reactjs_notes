// grab createStore from Redux library
const { createStore } = Redux;

// create initial state
const initState = {
  tasks: [],
  blogs: []
}

// create reducer
function reducerFunc(state = initState, action) {
  // console.log(action, state) // test
  if (action.type == 'ADD_TASK' ) {
    return {
      ...state,
      tasks: [...state.tasks, action.task]
    }
  }
  if (action.type == 'ADD_BLOG' ) {
    return {
      ...state,
      blogs: [...state.blogs, action.blog]
    }
  }
}

// create store
const store = createStore(reducerFunc);

// create subscription
store.subscribe(() => {
  console.log('state has been updated:', store.getState());
})

// dispatch action
store.dispatch({ type: 'ADD_TASK', task: 'feed three baby kittens' });
store.dispatch({ type: 'ADD_TASK', task: 'rub baby kittens tummy after' });
store.dispatch({ type: 'ADD_BLOG', blog: 'document kittens condition' });

/*
OLD Version for dispatch action example

// create action
const taskAction = { type: 'ADD_TASK', task: 'walk the cat' }

// dispatch action
store.dispatch(taskAction)
*/