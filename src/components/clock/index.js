import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import './clock.css'

class Clock extends Component {
    state = {
      date: '00:00:00',
      standard: true
    }
    componentDidMount() {
      this.clockInterval = setInterval(this.updateTime, 1000)
    }
    
    componentWillUnmount() {
      clearInterval(this.clockInterval)
    }

    switchStandard = () => this.state.standard ? this.setState({standard: false}) : this.setState({standard: true})
    
    updateTime = () => {
      const base = new Date()
      const hour = base.getHours().toString().length === 1 ? `0${base.getHours()}` : base.getHours()
      const standardHour = hour > 12 ? hour - 12 : hour === '00' ? '12' : hour
      const minute = base.getMinutes().toString().length === 1 ? `0${base.getMinutes()}` : base.getMinutes()
      const seconds = base.getSeconds().toString().length === 1 ? `0${base.getSeconds()}` : base.getSeconds()
      const suffix = hour > 11 ? 'PM' : 'AM'
      const date = this.state.standard ? `${standardHour}:${minute}:${seconds} ${suffix}` : `${hour}:${minute}:${seconds}`
      this.setState({date})
    }
    render() {
      const {standard, date} = this.state
      return (
        <div className='outer-container'>
          <div onClick={this.switchStandard} className='button'>
            {standard ? 'Switch to Military' : 'Switch to Standard'}
          </div>
          <div className='clock-container'>
            <h2>{date}</h2>
          </div>
        </div>
      )
    }
}

Clock.propTypes = {
}

export default Clock