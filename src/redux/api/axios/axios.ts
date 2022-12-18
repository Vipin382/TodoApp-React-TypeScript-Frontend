import axios from "axios";
import qs from "qs";

const registerInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

let config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
export const CreateUser = async (data: any) => {
  let response = await registerInstance.post("user/create", data, config);
  return response.data;
};

export const ValidateUser = async (data: any) => {
  try {
    let response = await registerInstance.post(
      "auth/login",
      qs.stringify({
        username: data.get("username"),
        password: data.get("password"),
      })
    );
    return response.data;
  } catch (error: any) {
    console.log(error.AxiosError.message);
  }
};
