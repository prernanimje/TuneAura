import { useState } from 'react';
import { loginUrl } from "../utils/spotifyAuth";
import spotify from "../assets/spotify.png";

export default function Login() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Main Content */}
      <div className="text-center space-y-8 px-4 max-w-md w-full">
        {/* Hamburger Menu */}
        <div className="absolute top-4 right-4">
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger flex items-center gap-1 cursor-pointer text-white"
          >
            <span className="w-6 h-1 rounded-full"></span>
            <span className="w-6 h-1 rounded-full"></span>
            <span className="w-6 h-1 rounded-full"></span>
          </div>
        </div>

        {/* Logo and Title */}
        <h1 className="text-4xl font-bold text-white mb-8">MOOD PLAYLIST</h1>

        {/* Spotify Section */}
        <div className="space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={spotify}
              alt="Spotify Logo"
              className="w-32 h-32 object-contain"
            />
            <span className="text-xl font-bold text-white">Spotify®</span>
          </div>

          <p className="text-gray-600 mt-4">
            Connect your Spotify account to create personalized playlists based on your mood.
          </p>

          <small className="text-xs text-gray-500">
            Your privacy and data security are our top priorities.
          </small>
        </div>

        {/* Connect Button */}
        <a
          href={loginUrl}
          className="w-full mt-8 bg-black text-green-500 rounded-lg py-3 px-6 flex items-center justify-between"
        >
          <span className="flex space-x-4 items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="spotify-icon"
            >
              <path d="M16.587 2.793A11.921 11.921 0 0124 12c0-6.627-5.373-12-11.999-12-1.431 0-2.836.254-3.844.722-2.246-.518-4.27-1.695-5.832-3.733-.519-.519-1.062-1.062-1.591-1.592 3.182.029 6.248 1.528 6.248 3.733 0 .519-.254 1.062-.723 1.592a11.921 11.921 0 005.833 3.733c0 1.43.254 2.836.722 3.844A11.921 11.921 0 018.5 24c0 6.627 5.373 12 11.999 12 1.431 0 2.836-.254 3.844-.722 2.246.518 4.27 1.695 5.832 3.733.519.519 1.062.999 1.592 1.592a11.921 11.921 0 006.248-3.733c0-1.43-.254-2.836-.722-3.844A11.921 11.921 0 0116.587 2.793z" />
            </svg>
            <span>CONNECT WITH SPOTIFY</span>
          </span>
        </a>

        {/* Footer */}
        <footer className="mt-8 border-t border-white">
          <div className="flex justify-between text-xs text-gray-500 pt-4">
            <span>© 2023 Mood Playlist. All rights reserved.</span>
            <div className="space-x-4">
              <a href="#" className="hover:text-orange-200">Privacy Policy</a>
              <a href="#" className="hover:text-orange-200">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
