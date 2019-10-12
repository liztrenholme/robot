import React, { Component } from 'react'
import PropTypes from 'prop-types'
import bodyImg from '../../assets/body.png'
import bodyOff from '../../assets/bodyOff.png'
import './body.css'

class Body extends Component {
  render() {
    const { robotOn } = this.props
    return (
      <div className="body">
        <img src={robotOn ? bodyImg : bodyOff} alt='body' />
      </div>
    )
  }
}

Body.propTypes = {
  robotOn: PropTypes.bool,
}

export default Body