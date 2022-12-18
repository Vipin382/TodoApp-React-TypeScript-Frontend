import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../reducers/navbarSlice";
import userReducer from "../api/userSlice";
import authReducer from "../reducers/authSlice";
import taskReducer from "../reducers/taskSlice";
import delReducer from "../reducers/delSlice";
import profileReducer from "../reducers/profileSlice";
import videoReducer from "../reducers/videoRef";

export const navBarStore = configureStore({
  reducer: {
    navbar: navReducer,
    userProfile: userReducer,
    userAuth: authReducer,
    taskUse: taskReducer,
    delPop: delReducer,
    profileUpdate: profileReducer,
    videoPopup: videoReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof navBarStore.getState>;
