import { motion } from "framer-motion"
import './Home.css'
import Video from '../assets/Background-video.mp4'
import SideBar from './SideBar.jsx' 

export default function Home() {

  const fadeInUpAnimation ={
    hidden:{
      opacity:0 ,
      y: window.innerWidth <= 768 ? 200 : 500, 
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        staggerChildren:0.3,
        duration:1.5,
      }
    }
  }

  return (
    <div className="out"> 
      <SideBar/>
    <div className=" Outer-wrap-main h-screen bg-white text-black flex flex-col justify-center items-center p-8 relative">
      {/* Header */}
      <video src={Video} autoPlay loop muted className="video-background"></video>
      <motion.div initial="hidden" animate="show" variants={fadeInUpAnimation} className="upper-main text-center">
        <motion.h1 variants={fadeInUpAnimation} className="site-name text-4xl font-extrabold">TuneAura</motion.h1>
        <motion.h1 variants={fadeInUpAnimation} className="text-4xl font-extrabold mb-2 tracking-widest">MOOD</motion.h1>
        <motion.h2   variants={fadeInUpAnimation} className="text-2xl mb-6">PLAYLIST</motion.h2>
        <motion.p  variants={fadeInUpAnimation} className="text-black-400 text-lg mb-8">
          INSTANTLY MAKE A SPOTIFY PLAYLIST TO SUIT YOUR MOOD AND TASTE
        </motion.p>
      </motion.div>

      
    </div>
    </div>
  );
}
