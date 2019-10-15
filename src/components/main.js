import React, { Component } from 'react'
import Body from './body/index.js'
import RightArm from './rightArm/index.js'
import LeftArm from './leftArm/index.js'
import RightLeg from './rightLeg/index.js'
import LeftLeg from './leftLeg/index.js'
import Head from './head/index.js'
import '../App.css'
import Sound from 'react-sound'
import robotSinging from '../assets/364334__mialena24__canto-robot-1.wav'
import robotWalking from '../assets/55846__sergenious__robo.wav'
import defaultSound from '../assets/447999__audionauten__robot-affirmation-balanced.wav'
import robotThinking from '../assets/390531__freedomfightervictor__calculating.wav'
import startupSound from '../assets/397253__screamstudio__robot.wav'
import clashClang from '../assets/336879__shahruhaudio__robotic-transform-1.wav'
import robotMumble from '../assets/275561__deleted-user-4798915__robot-transmission.flac'


class Main extends Component {
    state = {
      dance: false,
      walkForward: false,
      walkBackward: false,
      currentSound: robotMumble,
      robotOn: true
    }
    handleOnOff = () => this.state.robotOn
      ? this.setState({robotOn: false, currentSound: clashClang, dance: false, walkBackward: false, walkForward: false})
      : this.setState({robotOn: true, currentSound: startupSound})
    dance = () => this.state.robotOn ? this.state.dance 
      ? this.setState({dance: false, currentSound: robotMumble}) 
      : this.setState({dance: true, walkBackward: false, walkForward: false, currentSound: robotSinging}) : null
    walkForward = () => this.state.robotOn ? this.state.walkForward 
      ? this.setState({walkForward: false, currentSound: defaultSound}) 
      : this.setState({walkForward: true, walkBackward: false, dance: false, currentSound: robotWalking}) : null
    walkBackward = () => this.state.robotOn ? this.state.walkBackward 
      ? this.setState({walkBackward: false, currentSound: defaultSound})
      : this.setState({walkBackward: true, walkForward: false, dance: false, currentSound: robotWalking}) : null
      handleCalculation = () => {
        this.setState({currentSound: robotThinking})
      }
      render() {
        const { dance, walkBackward, walkForward, currentSound, robotOn } = this.state
        return (
          <div className="main">
            <div className={dance 
              ? 'robot, dance' 
              : walkForward 
                ? 'robot, walkForward' 
                : walkBackward 
                  ? 'robot, walkBackward' 
                  : 'robot'}
            onClick={this.handleCalculation}>
              <Head dance={dance} walkForward={walkForward} walkBackward={walkBackward} robotOn={robotOn} />
              <Body dance={dance} walkForward={walkForward} walkBackward={walkBackward} robotOn={robotOn} />
              <RightArm dance={dance} walkForward={walkForward} walkBackward={walkBackward} robotOn={robotOn} />
              <LeftArm dance={dance} walkForward={walkForward} walkBackward={walkBackward} robotOn={robotOn} />
              <RightLeg dance={dance} walkForward={walkForward} walkBackward={walkBackward} robotOn={robotOn} />
              <LeftLeg dance={dance} walkForward={walkForward} walkBackward={walkBackward} robotOn={robotOn} />
            </div>
            <div className='buttons'>
              <div className={walkBackward ? 'btnActive' : 'btn'} onClick={this.walkBackward}>Walk backward</div>
              <div className={walkForward ? 'btnActive' : 'btn'} onClick={this.walkForward}>Walk forward</div>
              <div className={dance ? 'btnActive' : 'btn'} onClick={this.dance}>Dance</div>
              <div className={robotOn ? 'btnOn' : 'btnOff'} onClick={this.handleOnOff}>Power</div>
            </div>
            {currentSound ?
              <Sound
                url={currentSound}
                playStatus={Sound.status.PLAYING}
                loop={currentSound === robotWalking || currentSound === robotSinging}
                //   playFromPosition={300 /* in milliseconds */}
                //   onLoading={this.handleSongLoading}
                //   onPlaying={this.handleSongPlaying}
                //   onFinishedPlaying={this.handleSongFinishedPlaying}
              /> : null}
          </div>
        )
      }
}

export default Main