import React, { useState, useEffect } from 'react'

import data from '../../data/squareImages'

const images = data.images

const Square = () => {
  const [image, setImage] = useState('none')
  const audio = new Audio('/sounds/zapsplat_fantasy_magic_glissando_90s_style_dreamy_ascend_001_65050.mp3')
  const mouseHandler = () => {
    const randomImage = `${images[(Math.floor(Math.random() * images.length))]}`
    setImage(randomImage)
  }
  const clickHandler = () => {
    audio.play()
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setImage('none')
    }, 5000)
    return () => clearInterval(interval)
  }, [mouseHandler])

  const style = {
    backgroundImage: `url(${image})`
  }

  return (
    <>
      <div style={style} className='gif' onMouseEnter={mouseHandler} onClick={clickHandler}></div>
    </>
  )
}

export default Square
