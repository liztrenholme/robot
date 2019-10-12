import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import bodyImg from '../../assets/body.png'

class Body extends Component {
  render() {
    return (
      <div className="leftLeg">
        <img src={bodyImg} alt='leftleg' />
      </div>
    )
  }
}

Body.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default Body