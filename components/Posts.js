import React, { PropTypes, Component } from 'react'
import $ from 'jquery'
import 'slick-carousel'

export default class Posts extends Component {
  componentDidMount() {
    $(this.refs.carousel).slick()
  }
  render() {
    return (
      <ul ref="carousel">
        {this.props.posts.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
