import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import leftLegImg from '../../assets/leg.png'

class LeftLeg extends Component {
  render() {
    return (
      <div className="leftLeg">
        <img src={leftLegImg} alt='leftleg' />
      </div>
    )
  }
}

LeftLeg.propTypes = {
//   selectView: PropTypes.func,
//   active: PropTypes.string
}

export default LeftLeg