import { createSlice } from "@reduxjs/toolkit";

const delSlice = createSlice({
  name: "del",
  initialState: { show: false, id: "", accessToken: "" },
  reducers: {
    deleteItem: (state, action) => {
      state.show = action.payload.show;
      state.id = action.payload.id;
      state.accessToken = action.payload.accessToken;
    },
    showItem: (state, action) => {
      state.show = action.payload.show;
      state.id = "";
      state.accessToken = "";
    },
  },
});

export const stateShowSelector = (state: any) => state.delPop.show;
export const stateIdSelector = (state: any) => state.delPop.id;
export const stateTokenSelector = (state: any) => state.delPop.accessToken;

export const { deleteItem, showItem } = delSlice.actions;

export default delSlice.reducer;
