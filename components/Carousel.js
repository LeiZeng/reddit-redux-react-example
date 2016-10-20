import React, { Component, PropTypes } from 'react'
import Posts from './Posts'

export default class Carousel extends Component {
    return (
      <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
      {<Posts posts={this.props.posts}/>}
      </div>
    )
  }
}

Carousel.propTypes = {
  posts: PropTypes.array.isRequired
}
