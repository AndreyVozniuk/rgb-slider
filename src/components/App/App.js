import React, {useState} from 'react'
import {rgbToHex} from '../../helpers'
import Slider from '../Slider/Slider'

import './App.css'

const App = () => {
  const [Rvalue, setRvalue] = useState(125)
  const [Gvalue, setGvalue] = useState(150)
  const [Bvalue, setBvalue] = useState(50)

  const hexColor = rgbToHex(Rvalue, Gvalue, Bvalue)

  return <div className='wrap'>
    <div className='content'>
      <h1 style={{marginBottom:'20px'}}>Color chooser</h1>
      <div className='sliders'>
        <Slider title='Red' value={Rvalue} onChange={setRvalue}/>
        <Slider title='Green' value={Gvalue} onChange={setGvalue}/>
        <Slider title='Blue' value={Bvalue} onChange={setBvalue}/>
      </div>
      <div className='color-block' style={{background: hexColor}}></div>
      <div className='result'>
        <span>Dec:</span> 
        <span className='badge badge-dark text-monospace'>{`rgba(${Rvalue}, ${Gvalue}, ${Bvalue}, 1)`}</span>
      </div>
      <div className='result'>
        <span>Hex:</span> 
        <span className='badge badge-dark text-monospace'>{hexColor}</span>
      </div>
    </div>
  </div>
}



export default App
