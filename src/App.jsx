import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./features/spotify/spotifySlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Callback from "./pages/Callback";
import Mood from "./pages/Mood.jsx";
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'
import Video from './assets/Background-video.mp4'


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("spotifyAccessToken");
    if (token) {
      dispatch(setAccessToken(token));
    }
  }, [dispatch]);

  return (
    <div className="relative h-screen w-full">
    {/* <video autoPlay loop muted className="absolute inset-0 h-full w-full object-cover">
      <source src={Video} type="video/mp4" />
    </video> */}
    <Routes>
      <Route path="/" element={<><Home/><Mood/></>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/mood" element={<Mood/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </div>
  );
}
