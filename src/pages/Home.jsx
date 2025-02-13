import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useNavigate } from "react-router-dom";
import PlayIcon from "../assets/play.svg";

gsap.registerPlugin(Draggable);

export default function Home() {
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

  return (
    <div className="h-screen bg-white text-black flex flex-col justify-center items-center p-8 relative">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2 tracking-widest">MOOD</h1>
        <h2 className="text-2xl mb-6">PLAYLIST</h2>
        <p className="text-gray-400 text-lg mb-8">
          INSTANTLY MAKE A SPOTIFY PLAYLIST TO SUIT YOUR MOOD AND TASTE
        </p>
      </div>

      {/* Mood Selector */}
      <div className="flex flex-col items-center w-full max-w-md">
        <h3 className="text-2xl mb-6">WHAT IS YOUR MOOD?</h3>
        <p className="text-gray-400 mb-4 text-sm">
          DRAG THE PLAY ICON TO SET THE MOOD
        </p>

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
          <span className={`${currentMood === "HAPPY" ? "font-bold text-black" : ""}`}>
            HAPPY
          </span>
          <span className={`${currentMood === "SAD" ? "font-bold text-black" : ""}`}>
            SAD
          </span>
          <span className={`${currentMood === "CHILL" ? "font-bold text-black" : ""}`}>
            CHILL
          </span>
          <span className={`${currentMood === "WORKOUT" ? "font-bold text-black" : ""}`}>
            WORKOUT
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-xs mt-8">
        <p>© 2006 SONY MUSIC ENTERTAINMENT UK LTD</p>
        <p>PRIVACY & COOKIE POLICY</p>
      </div>
    </div>
  );
}
