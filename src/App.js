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
      <Head />
      <Body />
      <RightArm />
      <LeftArm />
      <RightLeg />
      <LeftLeg />
    </div>
  )
}

export default App
