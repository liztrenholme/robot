import React from 'react'
import './App.css'
import Body from './components/body/index.js'
import RightArm from './components/rightArm/index.js'
import LeftArm from './components/leftArm/index.js'
import RightLeg from './components/rightLeg/index.js'
import LeftLeg from './components/leftLeg/index.js'
import Head from './components/head/index.js'

function App() {
  return (
    <div className="App">
      <div className='robot'>
        <Head />
        <Body />
        <RightArm />
        <LeftArm />
        <RightLeg />
        <LeftLeg />
      </div>
      <div className='buttons'>
        <div className='btn'>Walk backward</div>
        <div className='btn'>Walk forward</div>
        <div className='btn'>Dance</div>
      </div>
    </div>
  )
}

export default App
