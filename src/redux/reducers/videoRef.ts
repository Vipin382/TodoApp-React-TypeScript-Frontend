import { createSlice } from "@reduxjs/toolkit";
export const videoSlice = createSlice({
  name: "video",
  initialState: { hide: false },
  reducers: {
    setView: (state) => {
      state.hide = !state.hide;
    },
  },
});

export const { setView } = videoSlice.actions;

export const videoViewSelector = (state: any) => state.videoPopup.hide;

export default videoSlice.reducer;
