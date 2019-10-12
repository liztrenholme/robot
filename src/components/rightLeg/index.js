import React, { Component } from 'react'
import PropTypes from 'prop-types'
import rightLegImg from '../../assets/leg.png'
import './rightLeg.css'

class RightLeg extends Component {
  render() {
    const { dance, walkForward, walkBackward } = this.props
    return (
      <div className={dance ? 'rightLeg, danceRightLeg' : walkForward || walkBackward ? 'rightLeg, walkRightLeg' : 'rightLeg'}>
        <img className='legImg' src={rightLegImg} alt='rightleg' />
      </div>
    )
  }
}

RightLeg.propTypes = {
  dance: PropTypes.bool,
  walkForward: PropTypes.bool,
  walkBackward: PropTypes.bool
}

export default RightLeg