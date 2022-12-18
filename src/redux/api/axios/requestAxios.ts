import axios from "axios";
import {
  photoUpdateInterface,
  videoUpdateInterface,
} from "../../types/task.interface";
import {
  DeleteTaskInterface,
  TaskPayload,
  TaskUpdatePayloadInterface,
  usernameUpdateInterface,
} from "../../types/task.interface";

const manageRequest = axios.create({
  baseURL: "http://localhost:3000",
});

export const createNewTask = async ({ notes, accessToken }: TaskPayload) => {
  try {
    let response = await manageRequest.post(
      "task/create",
      {
        task: notes,
        completed: false,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const getFullUser = async (accessToken: string) => {
  try {
    let response = await manageRequest.get("user/all", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const getAllUserTask = async (accessToken: string) => {
  try {
    let response = await manageRequest.get("user/all", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyToken = async () => {
  try {
    let response = await manageRequest.get("auth/refreshToken", {
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const UpdateTask = async (
  taskUpdatePayload: TaskUpdatePayloadInterface
) => {
  try {
    let response = await manageRequest.patch(
      `task/update?taskId=${taskUpdatePayload.id}`,
      {
        task: taskUpdatePayload.notes,
        completed: taskUpdatePayload.completed,
      },
      {
        headers: {
          Authorization: `Bearer ${taskUpdatePayload.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const DeleteTask = async (initial: DeleteTaskInterface) => {
  console.log(initial);
  try {
    let response = await manageRequest.delete(
      `task/delete?taskId=${initial.id}`,
      {
        headers: {
          Authorization: `Bearer ${initial.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

export const UpdateUsername = async (initial: usernameUpdateInterface) => {
  try {
    let response = await manageRequest.patch(
      `user/updateUser?userId=${initial.id}`,
      {
        username: initial.username,
      },
      {
        headers: {
          Authorization: `Bearer ${initial.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUserProfile = async (initial: photoUpdateInterface) => {
  try {
    let response = await manageRequest.patch(
      `user/updatePhoto?photoId=${initial.id}`,
      {
        file: initial.file,
      },
      {
        headers: {
          Authorization: `Bearer ${initial.accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserVideo = async (updateVideo: videoUpdateInterface) => {
  try {
    let response = await manageRequest.patch(
      `user/updateVideo?videoId=${updateVideo.id}`,
      {
        url: updateVideo.url,
        type: updateVideo.type,
      },
      {
        headers: {
          Authorization: `Bearer ${updateVideo.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
