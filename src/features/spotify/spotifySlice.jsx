import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  userId: null,
  selectedMood: null,
};

const spotifySlice = createSlice({
  name: "spotify",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setSelectedMood: (state, action) => {
      state.selectedMood = action.payload;
    },
  },
});

export const { setAccessToken, setUserId, setSelectedMood } = spotifySlice.actions;
export default spotifySlice.reducer;
