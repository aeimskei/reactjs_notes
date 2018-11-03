// grab createStore from Redux library
const { createStore } = Redux;

// create initial state
const initState = {
  tasks: [],
  blogs: []
}

// create reducer
function reducerFunc(state = initState, action) {

}

// create store
const store = createStore(reducerfunc);

// create action
const taskAction = { type: 'ADD_TASK', task: 'walk the cat' }