import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
  name: "profile",
  initialState: {
    show: false,
  },
  reducers: {
    showProfile: (state) => {
      state.show = !state.show;
    },
  },
});

export const { showProfile } = profileSlice.actions;

export const profileSelector = (state: any) => state.profileUpdate.show;

export default profileSlice.reducer;
