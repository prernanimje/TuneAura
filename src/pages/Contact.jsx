import React from 'react'
import SideBar from './SideBar.jsx'
import './Home.css'
import Video from '../assets/Background-video.mp4'

function Contact() {
  return (
    <div>
       <video  className='vid' src={Video} autoPlay loop muted></video>
        <SideBar/>
      shreyash and prerna
    </div>
  )
}

export default Contact
