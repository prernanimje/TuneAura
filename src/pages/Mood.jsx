import React from 'react'
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useNavigate } from "react-router-dom";
import PlayIcon from "../assets/play.svg";
import { motion } from "framer-motion"
import './Home.css'
import Video from '../assets/Background-video.mp4'
import SideBar from './SideBar';

gsap.registerPlugin(Draggable);

function Mood() {
  const dragTarget = useRef(null);
  const trackRef = useRef(null);
  const navigate = useNavigate();
  const [currentMood, setCurrentMood] = useState("HAPPY");

  useEffect(() => {
    if (dragTarget.current && trackRef.current) {
      const trackWidth = trackRef.current.offsetWidth;
      const dragWidth = dragTarget.current.offsetWidth;

      Draggable.create(dragTarget.current, {
        type: "x",
        bounds: trackRef.current,
        onDrag: function () {
          const progress = (this.x / (trackWidth - dragWidth)) * 100;
          let mood = "HAPPY";
          if (progress > 25 && progress <= 50) {
            mood = "SAD";
          } else if (progress > 50 && progress <= 75) {
            mood = "CHILL";
          } else if (progress > 75) {
            mood = "WORKOUT";
          }
          setCurrentMood(mood);
        },
        onDragEnd: function () {
          const progress = (this.x / (trackWidth - dragWidth)) * 100;
          let mood = "HAPPY";
          if (progress > 25 && progress <= 50) {
            mood = "SAD";
          } else if (progress > 50 && progress <= 75) {
            mood = "CHILL";
          } else if (progress > 75) {
            mood = "WORKOUT";
          }
          localStorage.setItem("selectedMood", mood);
          navigate("/login");
        }
      });
    }
  }, [navigate]);

  const fadeInUpAnimation ={
    hidden:{
      opacity:0 ,
      y:500
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
    <div className='Mood-wrap'>
            <video  className='vid' src={Video} autoPlay loop muted></video>
            <SideBar/>
            <motion.div initial="hidden" animate="show" variants={fadeInUpAnimation}  className="mood flex flex-col items-center w-full max-w-md">
              <motion.h3  variants={fadeInUpAnimation} className="text-2xl  mb-6">WHAT IS YOUR MOOD?</motion.h3>
              <motion.p  variants={fadeInUpAnimation} className="text-black-400 mb-4 text-sm">
                DRAG THE PLAY ICON TO SET THE MOOD
              </motion.p>
      
              {/* Slider Track with updated design */}
              <div
                ref={trackRef}
                className="relative w-64 h-2 bg-gray-300 rounded-full mb-8"
              >
                {/* Draggable Handle with updated design */}
                <div
                  ref={dragTarget}
                  className="absolute -top-3 left-0 w-8 h-8 bg-white border-2 border-gray-400 rounded-full flex items-center justify-center shadow-md cursor-pointer"
                >
                  <img src={PlayIcon} alt="Play" className="w-4 h-4" />
                </div>
              </div>
      
              {/* Mood Labels */}
              <div className="w-full flex justify-between text-gray-500 px-4 mt-4 text-sm">
                <span className={`${currentMood === "HAPPY" ? "font-bold text-grey-500" : ""}`}>
                  HAPPY
                </span>
                <span className={`${currentMood === "SAD" ? "font-bold text-grey-500" : ""}`}>
                  SAD
                </span>
                <span className={`${currentMood === "CHILL" ? "font-bold text-grey-500" : ""}`}>
                  CHILL
                </span>
                <span className={`${currentMood === "WORKOUT" ? "font-bold text-grey-500" : ""}`}>
                  WORKOUT
                </span>
              </div>
              <motion.div initial="hidden" animate="show" variants={fadeInUpAnimation}   className=" foot  text-center text-gray-400 text-xs mt-8">
              <p>© 2006 SONY MUSIC ENTERTAINMENT UK LTD</p>
              <p>PRIVACY & COOKIE POLICY</p>
            </motion.div>
            </motion.div>
      
            {/* Footer */}
            
    </div>
  )
}

export default Mood
