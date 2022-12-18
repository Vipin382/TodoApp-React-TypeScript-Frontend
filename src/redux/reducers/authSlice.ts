import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ValidateUser } from "../api/axios/axios";
import { verifyToken } from "../api/axios/requestAxios";

interface TokenInterface {
  accessToken: string;
  status: "idle" | "failed" | "loading";
}

const initialState: TokenInterface = {
  accessToken: "",
  status: "idle",
};
export const loginUser = createAsyncThunk(
  "auth/login",
  async (initial: any) => {
    return await ValidateUser(initial);
  }
);

export const getRefreshToken = createAsyncThunk("/refresh", async () => {
  return await verifyToken();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    },
    removeToken: (state, action) => {
      state.accessToken = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(loginUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRefreshToken.fulfilled, (state, action) => {
        state.status = "idle";
        state.accessToken = action.payload.accessToken;
      })
      .addCase(getRefreshToken.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getRefreshToken.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const authTokenSelector = (state: any) => state.userAuth.accessToken;
export const authStatusSelector = (state: any) => state.userAuth.status;

export const { addToken, removeToken } = authSlice.actions;

export default authSlice.reducer;
