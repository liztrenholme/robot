import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import rightLegImg from '../../assets/leg.png'

class RightLeg extends Component {
  render() {
    return (
      <div className="rightLeg">
        <img src={rightLegImg} alt='rightleg' />
      </div>
    )
  }
}

RightLeg.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default RightLeg