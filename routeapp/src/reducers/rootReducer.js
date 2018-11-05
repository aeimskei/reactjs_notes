const initState = {
  posts: [
    {id: '1', title: 'Three baby kittens', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsum.'},
    {id: '2', title: 'How to feed baby kittens', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, amet.'},
    {id: '3', title: 'Tummy time for kittens', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aspernatur!'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
} 

export default rootReducer;