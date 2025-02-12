import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken } from "./features/spotify/spotifySlice";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Callback from "./pages/Callback";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("spotifyAccessToken");
    if (token) {
      dispatch(setAccessToken(token));
    }
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
