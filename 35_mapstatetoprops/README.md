# Mapping ```state``` to ```props```

<kbd>![alt text](img/review.png "screenshot")</kbd>

Earlier we finished creating the store and passed in the reducer, and we also provided the store we created in the Provider tag component, which is providing the store in turn to the App. So, we can access the store inside our React application.

Next, what we need to do is connect our components to the ```store``` so that we can interact with the ```state``` and get data from it.

Currently, the ```state``` is empty:

**rootReducer.js**
```
const initState = {
  blogs: []
}
```

We should create some dummy data for this to play around with to start and interact with it via retrieving data.

**rootReducer.js**
```
const initState = {
  blogs: [
    {id: '1', title: 'Three baby kittens', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum.'},
    {id: '2', title: 'How to feed baby kittens', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, amet.'},
    {id: '3', title: 'Tummy time for kittens', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aspernatur!'}
  ]
}
```

In the previous example, we're getting data from JSON Placeholder via axios. We don't want that anymore, we want to get it from our ```store```, the ```initState```.

Remove in **Home.js**:
```
state = {
  posts: [ ]
}
componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      // console.log(response) // test
      this.setState({
        posts: response.data.slice(0, 10)
      })
    })
}
```

Bc we're not gonna store the state in the component anymore. The whole point of Redux is to have a central store of data that each component can reach out to and grab data from.

Also, remove the import axios ```import axios from 'axios'``` from **Home.js**

## Connect Home.js Component to Redux Store

Remember the second library we installed, ```react-redux```, it's the bridge or glue layer, and we need to import a higher order component from that library, so that we can use that higher order component to connect this component with Redux store.