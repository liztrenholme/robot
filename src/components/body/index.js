import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import bodyImg from '../../assets/body.png'
import './body.css'

class Body extends Component {
  render() {
    return (
      <div className="body">
        <img src={bodyImg} alt='body' />
      </div>
    )
  }
}

Body.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default Body