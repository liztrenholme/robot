import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import rightArmImg from '../../assets/arm.png'
import './rightArm.css'

class RightArm extends Component {
  render() {
    return (
      <div className="rightArm">
        <img src={rightArmImg} alt='rightArm' />
      </div>
    )
  }
}

RightArm.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default RightArm