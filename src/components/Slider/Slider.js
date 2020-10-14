import React from 'react'
import PT from 'prop-types'

import './Slider.css'

const Slider = ({max=255, min=0, title, value, onChange}) => {
  return <>
  <h4>{title}</h4>
  <div className='slider-wrap'>
    <input 
    type='range' 
    className='slider'
    max={max} 
    min={min}
    value={value}
    onChange={e => onChange( Number(e.target.value) )}
    >
    </input>
    <span style={{width:'15px'}}>{value}</span>
  </div>
  </>
}

Slider.propTypes = {
  max: PT.number,
  min: PT.number,
  value: PT.number.isRequired,
  title: PT.string.isRequired,
  onChange: PT.func.isRequired
}

export default Slider