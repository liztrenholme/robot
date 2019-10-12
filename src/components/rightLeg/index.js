import React, { Component } from 'react'
import PropTypes from 'prop-types'
import rightLegImg from '../../assets/leg.png'
import './rightLeg.css'

class RightLeg extends Component {
  render() {
    const { dance } = this.props
    return (
      <div className={dance ? 'rightLeg, danceRightLeg' : 'rightLeg'}>
        <img className='legImg' src={rightLegImg} alt='rightleg' />
      </div>
    )
  }
}

RightLeg.propTypes = {
  dance: PropTypes.bool,
//   active: PropTypes.string
}

export default RightLeg