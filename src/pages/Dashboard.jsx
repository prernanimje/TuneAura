// pages/Dashboard.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../features/spotify/spotifyAPI";
import { setUserId, setSelectedMood } from "../features/spotify/spotifySlice";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, userId, selectedMood } = useSelector(
    (state) => state.spotify
  );

  // If the mood wasn't set in Redux, load it from localStorage
  useEffect(() => {
    if (!selectedMood) {
      const storedMood = localStorage.getItem("selectedMood");
      if (storedMood) {
        dispatch(setSelectedMood(storedMood));
      }
    }
  }, [selectedMood, dispatch]);

  useEffect(() => {
    const fetchUser = async () => {
      if (accessToken && !userId) {
        try {
          const user = await getCurrentUser(accessToken);
          dispatch(setUserId(user.id));
        } catch (error) {
          console.error("Error fetching user:", error);
          // If there is an error (like a 403), clear the token and redirect to login.
          localStorage.removeItem("spotifyAccessToken");
          navigate("/login");
        }
      }
    };
    fetchUser();
  }, [accessToken, dispatch, userId, navigate]);

  // Map moods from Home to their corresponding Spotify playlist IDs
  const moodMapping = {
    HAPPY: "7HuNdKMtFKGoYf7GVeOaOr",
    SAD: "70whedPQ9zLGTj4oOFdC4J",
    CHILL: "37DAWbfDqZbyMRVrIG75DU",
    WORKOUT: "57bsTErtvlCtBDtrGTzDBt",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          TuneAura
        </Link>
        <button className="text-white hover:text-gray-300">
          <FiMenu size={24} />
        </button>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 text-center flex-grow">
        <h2 className="text-4xl font-bold mb-6">
          Your {selectedMood} Playlist
        </h2>
        {selectedMood && (
          <div className="bg-blue-900 rounded-lg p-6 mb-8">
            <iframe
              style={{ borderRadius: "12px" }}
              src={`https://open.spotify.com/embed/playlist/${moodMapping[selectedMood]}?utm_source=generator`}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400 py-6 text-center mt-auto">
        <p>© 2025 Sony Music Entertainment UK Ltd</p>
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Dashboard;
