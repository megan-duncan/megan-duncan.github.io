import React, { useState } from 'react'

import data from '../../data/homeSounds'
const sounds = data.sounds

const MyButton = () => {
  const [sound, setsound] = useState(`${sounds[(Math.floor(Math.random() * sounds.length))]}`)
  var audio = new Audio(sound)
  const clickHandler = () => {
    audio.play()
    const randomsound = `${sounds[(Math.floor(Math.random() * sounds.length))]}`
    setsound(randomsound)
  }
  return (
    <div>
      <h1 className='button' onClick={clickHandler}>Press Me</h1>
    </div>
  )
}

export default MyButton
