import FirstNamedField from "../register/fields/FirstNamedField";
import PasswordField from "./fields/PasswordField";
import ProfileUploadField from "./fields/ProfileUploadField";
import { RegisterformFields } from "../../types/index";
import { useForm } from "react-hook-form";
import "../../../styles/form.scss";
import Button from "../../button/Button";
import "../../../styles/button.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/api/userSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterformFields>();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterformFields) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    let file: any = data.profile;
    formData.append("file", file[0]);
    try {
      await dispatch<any>(registerUser(formData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={"form"} onSubmit={handleSubmit(onSubmit)}>
      <FirstNamedField register={register} errors={errors.username} />
      <PasswordField register={register} errors={errors.password} />
      <ProfileUploadField register={register} errors={errors.profile} />
      <Button className={"button"}>Create Account</Button>
    </form>
  );
};

export default RegisterForm;
