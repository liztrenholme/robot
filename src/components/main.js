import React, { Component } from 'react'
import Body from './body/index.js'
import RightArm from './rightArm/index.js'
import LeftArm from './leftArm/index.js'
import RightLeg from './rightLeg/index.js'
import LeftLeg from './leftLeg/index.js'
import Head from './head/index.js'
import '../App.css'

class Main extends Component {
    state = {
      dance: false,
      walkForward: false,
      walkBackward: false
    }
    dance = () => this.state.dance ? this.setState({dance: false}) : this.setState({dance: true, walkBackward: false, walkForward: false})
    walkForward = () => this.state.walkForward ? this.setState({walkForward: false}) : this.setState({walkForward: true, walkBackward: false, dance: false})
    walkBackward = () => this.state.walkBackward ? this.setState({walkBackward: false}) : this.setState({walkBackward: true, walkForward: false, dance: false})
    render() {
      const { dance, walkBackward, walkForward } = this.state
      return (
        <div className="main">
          <div className={dance ? 'robot, dance' : walkForward ? 'robot, walkForward' : walkBackward ? 'robot, walkBackward' : 'robot'}>
            <Head dance={dance} walkForward={walkForward} walkBackward={walkBackward} />
            <Body dance={dance} walkForward={walkForward} walkBackward={walkBackward} />
            <RightArm dance={dance} walkForward={walkForward} walkBackward={walkBackward} />
            <LeftArm dance={dance} walkForward={walkForward} walkBackward={walkBackward} />
            <RightLeg dance={dance} walkForward={walkForward} walkBackward={walkBackward} />
            <LeftLeg dance={dance} walkForward={walkForward} walkBackward={walkBackward} />
          </div>
          <div className='buttons'>
            <div className={walkBackward ? 'btnActive' : 'btn'} onClick={this.walkBackward}>Walk backward</div>
            <div className={walkForward ? 'btnActive' : 'btn'} onClick={this.walkForward}>Walk forward</div>
            <div className={dance ? 'btnActive' : 'btn'} onClick={this.dance}>Dance</div>
          </div>
        </div>
      )
    }
}

export default Main