import React, { Component }from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import StickyNote from '../sticky_notes.png'

class Home extends Component {
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
  render() {
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id} >
            <img src={StickyNote} alt="Sticky Note"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">There are no posts yet.</div>
    )
    return(
      <div className="container">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home