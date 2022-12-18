import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  photoUpdateInterface,
  videoUpdateInterface,
} from "../types/task.interface";
import {
  createNewTask,
  getFullUser,
  getAllUserTask,
  UpdateUsername,
  updateUserVideo,
} from "../api/axios/requestAxios";
import {
  TaskPayload,
  TokenInterface,
  TaskUpdatePayloadInterface,
} from "../types/task.interface";
import {
  UpdateTask,
  DeleteTask,
  UpdateUserProfile,
} from "../api/axios/requestAxios";
import {
  DeleteTaskInterface,
  usernameUpdateInterface,
} from "../types/task.interface";

const initialState: TokenInterface = {
  message: "",
  status: "idle",
  username: "",
  profile: "",
  profileType: "",
  profileId: "",
  userId: "",
  task: [],
};

export const createTask = createAsyncThunk(
  "task/create",
  async (initial: TaskPayload) => {
    return await createNewTask({
      notes: initial.notes,
      accessToken: initial.accessToken,
    });
  }
);

export const getUser = createAsyncThunk("user/all", async (initial: string) => {
  return await getFullUser(initial);
});

export const getAllTask = createAsyncThunk(
  "task/allTask",
  async (initial: string) => {
    return await getAllUserTask(initial);
  }
);

export const updateUserTask = createAsyncThunk(
  "task/update",
  async (initial: TaskUpdatePayloadInterface) => {
    return await UpdateTask(initial);
  }
);

export const deleteUserTask = createAsyncThunk(
  "task/delete",
  async (initial: DeleteTaskInterface) => {
    return await DeleteTask(initial);
  }
);

export const updateUsernameById = createAsyncThunk(
  "user/updateUsername",
  async (initial: usernameUpdateInterface) => {
    return await UpdateUsername(initial);
  }
);

export const updateProfileById = createAsyncThunk(
  "user/updateProfile",
  async (initial: photoUpdateInterface) => {
    return await UpdateUserProfile(initial);
  }
);

export const updateVideoUrl = createAsyncThunk(
  "user/updateVideo",
  async (videoDto: videoUpdateInterface) => {
    return await updateUserVideo(videoDto);
  }
);

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createTask.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        console.log(action.type);
        console.log(action.meta);
      })
      .addCase(createTask.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(createTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = "success";
        state.profile = action.payload.profile.profile;
        state.task = action.payload.tasks;
        state.username = action.payload.username;
        state.profileType = action.payload.type;
        state.profileId = action.payload.profile.id;
        state.userId = action.payload.id;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getAllTask.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = "success";
        state.task = action.payload.tasks;
      })
      .addCase(getAllTask.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(getAllTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateUserTask.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.message;
      })
      .addCase(updateUserTask.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(updateUserTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteUserTask.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.message;
      })
      .addCase(deleteUserTask.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(deleteUserTask.pending, (state, action) => {
        state.status = "loading";
      });
  },
});

export const taskMessageSelector = (state: any) => state.taskUse.message;
export const taskStatusSelector = (state: any) => state.taskUse.status;
export const taskUsernameSelector = (state: any) => state.taskUse.username;
export const taskProfileSelector = (state: any) => state.taskUse.profile;
export const taskTaskSelector = (state: any) => state.taskUse.task;
export const taskProfileTypeSelector = (state: any) =>
  state.taskUse.profileType;
export const taskProfileIdSelector = (state: any) => state.taskUse.profileId;
export const userIdSelector = (state: any) => state.taskUse.userId;

export default taskSlice.reducer;
