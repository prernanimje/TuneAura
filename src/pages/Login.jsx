import { loginUrl } from "../utils/spotifyAuth";


export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <a
        href={loginUrl}
        className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition"
      >
        Login with Spotify
      </a>
    </div>
  );
}
