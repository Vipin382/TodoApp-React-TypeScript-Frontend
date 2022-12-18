import FirstNamedField from "./fields/FirstNamedField";
import PasswordField from "./fields/PasswordField";
import { LoginFormFields } from "../../types/index";
import { useForm } from "react-hook-form";
import "../../../styles/form.scss";
import Button from "../../button/Button";
import "../../../styles/button.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  authStatusSelector,
} from "../../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormFields>();

  const dispatch = useDispatch<any>();
  const userStatus = useSelector<any>(authStatusSelector);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onSubmit = async (data: LoginFormFields) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    await dispatch(loginUser(formData));
    if (userStatus === "idle") {
      navigate("/todo");
    }
  };

  return (
    <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
      <FirstNamedField register={register} errors={errors.username} />
      <PasswordField register={register} errors={errors.password} />
      <Button className={"button"}>Login</Button>
    </form>
  );
};

export default LoginForm;
