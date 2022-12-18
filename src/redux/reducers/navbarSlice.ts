import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "nav",
  initialState: {
    show: true,
  },
  reducers: {
    showNavbar: (state) => {
      state.show = !state.show;
    },
  },
});

export const { showNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;
