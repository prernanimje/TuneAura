// features/spotify/spotifyAPI.js
export const getCurrentUser = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    // Read the error text (which might be HTML or plain text)
    const errorText = await response.text();
    console.error("Spotify API error:", errorText);
    // Throw an error so that calling code can handle it
    throw new Error(`Spotify API error: ${errorText}`);
  }

  return response.json();
};
