import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './clock.css'

class Clock extends Component {
    state = {
      date: ''
    }
    componentDidMount() {
      this.clockInterval = setInterval(this.updateTime, 1000)
    }
    
    componentWillUnmount() {
      clearInterval(this.clockInterval)
    }
    
    updateTime = () => {
      const base = new Date()
      const hour = base.getHours().toString().length === 1 ? `0${base.getHours()}` : base.getHours()
      const minute = base.getMinutes().toString().length === 1 ? `0${base.getMinutes()}` : base.getMinutes()
      // this.setState({date: hour})
      const seconds = base.getSeconds().toString().length === 1 ? `0${base.getSeconds()}` : base.getSeconds()
      const date = `${hour}:${minute}:${seconds}`
      this.setState({date})
    }
    render() {
      console.log(this.state.date)
      return (
        <div className='clock-container'>
          <h2>{this.state.date}</h2>
        </div>
      )
    }
}

Clock.propTypes = {
}

export default Clock