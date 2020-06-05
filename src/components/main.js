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
import tv from '../assets/tv2.png'
import axios from 'axios'
import {getWeather} from './modules/index.js'

const defaultGif = 'https://media.giphy.com/media/Yqn9tE2E00k4U/giphy.gif'
const colorsGif = 'https://media.giphy.com/media/Ph0oIVQeuvh0k/giphy.gif'

class Main extends Component {
    state = {
      dance: false,
      walkForward: false,
      walkBackward: false,
      currentSound: robotMumble,
      robotOn: true,
      isLoadingJoke: false,
      joke: '',
      error: '',
      gifUrl: colorsGif
    }
    async componentDidMount() {
      const hi = await getWeather()
      console.log('weather', hi)
    }
  handleOnOff = () => this.state.robotOn
    ? this.setState({
      robotOn: false, 
      currentSound: clashClang, 
      dance: false, 
      walkBackward: false, 
      walkForward: false, 
      joke: '', 
      gifUrl: defaultGif
    })
    : this.setState({robotOn: true, currentSound: startupSound, gifUrl: colorsGif})

    dance = () => this.state.robotOn ? this.state.dance 
      ? this.setState({dance: false, currentSound: robotMumble}) 
      : this.setState({dance: true, walkBackward: false, walkForward: false, currentSound: robotSinging, joke: ''}) : null

    walkForward = () => this.state.robotOn ? this.state.walkForward 
      ? this.setState({walkForward: false, currentSound: defaultSound}) 
      : this.setState({walkForward: true, walkBackward: false, dance: false, currentSound: robotWalking, joke: ''}) : null

    walkBackward = () => this.state.robotOn ? this.state.walkBackward 
      ? this.setState({walkBackward: false, currentSound: defaultSound})
      : this.setState({walkBackward: true, walkForward: false, dance: false, currentSound: robotWalking, joke: ''}) : null

    //   handleCalculation = (a, b, c) => {
    //     this.setState({currentSound: robotThinking})
    //   }

  getJoke = async () => {
    this.setState({currentSound: robotThinking, isLoadingJoke: true})
    let jokeData = {}
    try {
      jokeData = await axios.get('https://icanhazdadjoke.com/slack')
    } catch (error) {
      this.setState({error})
    }
    if (jokeData && jokeData.data) {
      this.setState({
        joke: jokeData.data.attachments[0].text,
        isLoadingJoke: false
      })
    }
  }
  getGiphy = async () => {
    this.setState({currentSound: robotThinking, isLoadingJoke: true})
    let giphyData = {}
    try {
      giphyData = await axios.get('https://api.giphy.com/v1/gifs/random?q=&api_key=b44ia2OVKIlqHGEUv72X9Erdu2wUcTzd&limit=1')
    } catch (error) {
      this.setState({error})
    }
    if (giphyData && giphyData.data) {
      this.setState({
        gifUrl: giphyData.data.data.images.fixed_height.url,
        isLoadingJoke: false,
        joke: ''
      })
    }
  }
  getWeather = async () => {
    let weather = {}
    try {
      weather = await axios.post('https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey')
    } catch (error) {
      this.setState({error})
    }
    if (weather && weather.data) {
      this.setState({
        gifUrl: weather.data.data.images.fixed_height.url,
        isLoadingJoke: false,
        joke: ''
      })
    }
  }
  closeJoke = () => this.setState({joke: ''})
  render() {
    const { dance, walkBackward, walkForward, currentSound, 
      robotOn, joke, gifUrl } = this.state
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
        {joke.length ?
          (<div className='textBox' onClick={this.closeJoke}>
            {joke}
          </div>) : null}
        <div className='buttons'>
          <div className={walkBackward ? 'btnActive' : 'btn'} onClick={this.walkBackward}>Walk backward</div>
          <div className={walkForward ? 'btnActive' : 'btn'} onClick={this.walkForward}>Walk forward</div>
          <div className={dance ? 'btnActive' : 'btn'} onClick={this.dance}>Dance</div>
          <div className='btn' onClick={robotOn ? this.getJoke : null}>Tell me a joke!</div>
          <div className='btn' onClick={robotOn ? this.getGiphy : null}>Change the channel!</div>
          <div className={robotOn ? 'btnOn' : 'btnOff'} onClick={this.handleOnOff}>Power</div>
        </div>
        <div className='tvBox'>
          <img className='tvOuter' src={tv} alt='tv' height='170px' width='400px' />
          <img className='tvInner' src={gifUrl} alt='gif' height='150px' />
        </div>
        {currentSound ?
          <Sound
            url={currentSound}
            playStatus={Sound.status.PLAYING}
            loop={currentSound === robotWalking || currentSound === robotSinging}
            playFromPosition={currentSound === robotThinking ? 9700 : null /* in milliseconds */}
            //   onLoading={this.handleSongLoading}
            //   onPlaying={this.handleSongPlaying}
            //   onFinishedPlaying={this.handleSongFinishedPlaying}
          /> : null}
      </div>
    )
  }
}

export default Main