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
      tasks: [...state.tasks, action.task]
    }
  }
}

// create store
const store = createStore(reducerFunc);

// create action
const taskAction = { type: 'ADD_TASK', task: 'walk the cat' }

// dispatch action
store.dispatch(taskAction)

