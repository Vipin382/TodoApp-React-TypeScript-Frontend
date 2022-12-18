import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { payloadInterface } from "../interface/todo.interface";
import { CreateUser } from "./axios/axios";

export const initialState: payloadInterface = {
  users: { name: null, password: null, file: null },
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/create",
  async (initial: any) => {
    return await CreateUser(initial);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdded: (
      state,
      action: PayloadAction<{ name: string; password: string; file: File }>
    ) => {
      state.users = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
      });
  },
});

export const getUserStatus = (state: any) => state.userProfile.status;
export const getUserError = (state: any) => state.userProfile.error;

export const { userAdded } = userSlice.actions;

export default userSlice.reducer;
