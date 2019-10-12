import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import headImg from '../../assets/head.png'
import './head.css'

class Head extends Component {
  render() {
    return (
      <div className="head">
        <img src={headImg} alt='head' />
      </div>
    )
  }
}

Head.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default Head