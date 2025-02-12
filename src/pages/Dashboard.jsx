import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../features/spotify/spotifyAPI";
import { setUserId, setSelectedMood } from "../features/spotify/spotifySlice";

const moodPlaylists = {
  Happy: "7HuNdKMtFKGoYf7GVeOaOr",
  Sad: "70whedPQ9zLGTj4oOFdC4J",
  Chill: "37DAWbfDqZbyMRVrIG75DU",
  Travel: "57bsTErtvlCtBDtrGTzDBt",
};

export default function Dashboard() {
  const dispatch = useDispatch();
  const { accessToken, userId, selectedMood } = useSelector((state) => state.spotify);

  useEffect(() => {
    const fetchUser = async () => {
      if (accessToken && !userId) {
        const user = await getCurrentUser(accessToken);
        dispatch(setUserId(user.id));
      }
    };
    fetchUser();
  }, [accessToken, dispatch, userId]);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Mood Playlists</h1>
        <div className="flex space-x-4 mb-6">
          {Object.keys(moodPlaylists).map((mood) => (
            <button
              key={mood}
              onClick={() => dispatch(setSelectedMood(mood))}
              className={`px-4 py-2 rounded-lg font-semibold ${
                selectedMood === mood ? "bg-green-500" : "bg-gray-700"
              } text-white`}
            >
              {mood}
            </button>
          ))}
        </div>

        {selectedMood && (
          <iframe
            style={{ borderRadius: "12px" }}
            src={`https://open.spotify.com/embed/playlist/${moodPlaylists[selectedMood]}?utm_source=generator`}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        )}
      </div>
    </div>
  );
}
