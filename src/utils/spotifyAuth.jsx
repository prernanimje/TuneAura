const CLIENT_ID = "225bc93d904444fda34ac08f942c2529";
const REDIRECT_URI = "http://localhost:5173/callback";
const SCOPES = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
];

export const loginUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
  REDIRECT_URI
)}&scope=${SCOPES.join("%20")}&show_dialog=true`;
