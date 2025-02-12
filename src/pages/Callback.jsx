import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../features/spotify/spotifySlice";

export default function Callback() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get("access_token");
      if (token) {
        dispatch(setAccessToken(token));
        localStorage.setItem("spotifyAccessToken", token);
        navigate("/dashboard");
      }
    }
  }, [dispatch, navigate]);

  return <div className="text-white text-center mt-10">Authenticating...</div>;
}
