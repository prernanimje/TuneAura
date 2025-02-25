import { useState } from 'react';
import { loginUrl } from "../utils/spotifyAuth";
import spotify from "../assets/spotify.png";
import Logo from '../assets/icons8-music.svg'
import './Home.css'
import './Home.css'
import SideBar from './SideBar';

export default function Login() {  

  return (
    
    <div className="main-content ">
      {/* Main Content */}
       <SideBar/>
      <div className=" main-wrap ">
        {/* Hamburger Menu */}
        {/* <div className="absolute top-4 right-4">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger flex items-center gap-1 cursor-pointer text-white"
          >
            <span className="w-6 h-1 rounded-full"></span>
            <span className="w-6 h-1 rounded-full"></span>
            <span className="w-6 h-1 rounded-full"></span>
          </div>
        </div> */}

        {/* Logo and Title */}
        <div className='mid-main'>
        <div className='main-head-login'>
        <h1 className="Mood-head font-extrabold text-white mb-8">TuneAura</h1>
        <span className='playlist-down'>PLAYLIST</span>
        </div>
        {/* Spotify Section */}
        <div className="message space-y-4">
          <div className="image-logo ">
            <img
              src={spotify}
              alt="Spotify Logo"
              className=" img w-24 h-24 object-contain"
            />
            <span className="spotify text- font-bold text-white">Spotify <span className='text-2xl'>®</span></span>
          </div>
           <div className='connect'>
          <p>
            CONNECT YOUR SPOTIFY ACCOUNT TO CREATE PERSONALIZED PLAYLISTS BASED ON YOUR MOOD.
          </p>

          <small className="privacy text-xs text-700">
            Your privacy and data security are our top priorities.
          </small>
          </div>
        </div>

        {/* Connect Button */}
        <a
          href={loginUrl}
          className="button w-full mt-8 text-bold bg-green-800 text-green-500 rounded-lg py-3 px-6 flex items-center justify-between"
        >
          <span className="but-inside ">
           <img src={spotify} alt="" className="w-8 h-8 object-contain" />
            <span id='under'>CONNECT WITH SPOTIFY</span>
          </span>
        </a>

        {/* Footer */}
        <footer className="foot mt-8 ">
          <div className="flex justify-between text-xs text-gray-500 pt-4">
            <span>© 2023 Mood Playlist. All rights reserved.</span>
            <div className="space-x-4">
              <a href="#" className="hover:text-orange-200">|Privacy Policy</a>
              <a href="#" className="hover:text-orange-200">Terms of Service</a>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </div>
  );
}
