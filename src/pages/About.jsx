import React from 'react'
import SideBar from './SideBar.jsx'
import './Home.css'
import Video from '../assets/Background-video.mp4'

function About() {
  return (
    <div>
        <video  className='vid' src={Video} autoPlay loop muted></video>
        <SideBar/>
      TuneAura
    </div>
  )
}

export default About
