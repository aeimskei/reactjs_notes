import React, { Component }from 'react'
// import axios from 'axios' // use only without Redux
import { Link } from 'react-router-dom'
import StickyNote from '../sticky_notes.png'
import { connect } from 'react-redux'

class Home extends Component {
  
  /* =====================================
  Previous example w/out Redux
  ========================================
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
  ======================================== */
  render() {
    console.log(this.props);
    // const { posts } = this.state // 'this' no longer exists when using Redux bc no state in the component like before, instead:
    const { posts } = this.props;
    
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
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home)