import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import leftArmImg from '../../assets/arm.png'
import './leftArm.css'

class LeftArm extends Component {
  render() {
    return (
      <div className="leftArm">
        <img src={leftArmImg} alt='leftArm' />
      </div>
    )
  }
}

LeftArm.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default LeftArm