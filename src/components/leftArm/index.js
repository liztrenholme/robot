import React, { Component } from 'react'
import PropTypes from 'prop-types'
import leftArmImg from '../../assets/arm.png'
import './leftArm.css'

class LeftArm extends Component {
  render() {
    const { dance } = this.props
    return (
      <div className={dance ? 'leftArm, danceLeftArm': 'leftArm'}>
        <img src={leftArmImg} alt='leftArm' />
      </div>
    )
  }
}

LeftArm.propTypes = {
  dance: PropTypes.bool,
//   active: PropTypes.string
}

export default LeftArm