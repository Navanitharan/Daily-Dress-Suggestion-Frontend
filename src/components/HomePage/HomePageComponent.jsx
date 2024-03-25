import React from 'react'
import Navbar from './navbar'
import HomePage from './HomePage'
import ColorPickerPage from '../ColorPickerPage'
import AboutPage from '../About/AboutPage'

const HomePageComponent = () => {
  return (
    <div>
      <Navbar/>
        <HomePage/>
        <ColorPickerPage/>
        <AboutPage/>
    </div>
  )
}

export default HomePageComponent
