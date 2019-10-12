import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import rightLegImg from '../../assets/leg.png'
import './rightLeg.css'

class RightLeg extends Component {
  render() {
    return (
      <div className="rightLeg">
        <img className='legImg' src={rightLegImg} alt='rightleg' />
      </div>
    )
  }
}

RightLeg.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default RightLeg