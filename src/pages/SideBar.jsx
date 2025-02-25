import React, { useState} from 'react';
import './SideBar.css';
import Logo from '../assets/icons8-music.svg'
import {Link} from 'react-router-dom';


const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <div>
      <button onClick={toggleNav} className="nav-toggle">
        {/* {isOpen ? 'Close' : 'Open'} */}
         <img src={Logo} alt="Menu" /> 
      </button>
      <div className= {`sidenav ${isOpen ? 'open' : ''}`}>
        
        <Link to="/home" onClick={toggleNav}>Home</Link>
        <Link to="/about" onClick={toggleNav}>About</Link>
        <Link to="/mood" onClick={toggleNav} >Mood</Link>
        <Link to="/contact" onClick={toggleNav}>Contact</Link>
      </div>
    </div>
  );
};

export default SideBar;