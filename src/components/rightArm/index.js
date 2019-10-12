import React, { Component } from 'react'
import PropTypes from 'prop-types'
import rightArmImg from '../../assets/arm.png'
import './rightArm.css'

class RightArm extends Component {
  render() {
    const { dance } = this.props
    return (
      <div className={dance ? 'rightArm, danceRightArm' : 'rightArm'}>
        <img src={rightArmImg} alt='rightArm' />
      </div>
    )
  }
}

RightArm.propTypes = {
  dance: PropTypes.bool,
//   active: PropTypes.string
}

export default RightArm