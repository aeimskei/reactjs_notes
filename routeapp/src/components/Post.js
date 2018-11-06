import React, { Component } from 'react'
// import axios from 'axios' // use only without Redux
import { connect } from 'react-redux'

class Post extends Component {
  /* =====================================
  Previous example w/out Redux
  ========================================
  state = {
    post: null
  }
  componentDidMount() {
    // console.log(this.props) // test
    let id = this.props.match.params.post_id
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(response => {
        this.setState({
          post: response.data
        })
        // console.log(response) // test
      })
  }
  ======================================== */
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Post is loading...</div>
    )
    return(
      <div className="container">
        { post }
      </div>
    )
  }
}

const mapStateToProps = (state, thisProps) => {
  let id = thisProps.match.params.post_id
  return {
    post: state.posts.find((post) => {
      return post.id === id
    })
  }
}

export default connect(mapStateToProps)(Post)


