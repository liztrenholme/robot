import React, { Component } from 'react'
import PropTypes from 'prop-types'
import headImg from '../../assets/head.png'
import headOffImg from '../../assets/headOff.png'
import './head.css'

class Head extends Component {
  render() {
    const { dance, robotOn } = this.props
    return (
      <div className={dance ? 'head, danceHead' : 'head'}>
        <img src={robotOn ? headImg : headOffImg} alt='head' />
      </div>
    )
  }
}

Head.propTypes = {
  dance: PropTypes.bool,
  robotOn: PropTypes.bool
}

export default Head