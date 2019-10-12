import React, { Component } from 'react'
import PropTypes from 'prop-types'
import headImg from '../../assets/head.png'
import './head.css'

class Head extends Component {
  render() {
    const { dance } = this.props
    return (
      <div className={dance ? 'head, danceHead' : 'head'}>
        <img src={headImg} alt='head' />
      </div>
    )
  }
}

Head.propTypes = {
  dance: PropTypes.bool,
//   active: PropTypes.string
}

export default Head