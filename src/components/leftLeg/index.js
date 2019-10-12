import React, { Component } from 'react'
import PropTypes from 'prop-types'
import leftLegImg from '../../assets/leg.png'
import './leftLeg.css'

class LeftLeg extends Component {
  render() {
    const { walkForward, walkBackward } = this.props
    return (
      <div className={walkForward || walkBackward ? 'leftLeg, walkLeftLeg' : 'leftLeg'}>
        <img className='legImg' src={leftLegImg} alt='leftleg' />
      </div>
    )
  }
}

LeftLeg.propTypes = {
  walkForward: PropTypes.bool,
  walkBackward: PropTypes.bool
}

export default LeftLeg