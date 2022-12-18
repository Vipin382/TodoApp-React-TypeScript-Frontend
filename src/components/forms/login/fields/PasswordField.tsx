import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import "../../../../styles/input.scss";
import { LoginFormFields } from "../../../types/index";

type Props = {
  register: UseFormRegister<LoginFormFields>;
  errors?: FieldError;
};

const PasswordField: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={"inputContainer"}>
      <div className={"header"}>
        <div className={"inputlabel"}>
          <label htmlFor={"password"}>{"Password"}</label>
        </div>
        {errors && <div className={"inputError"}>{errors?.message}</div>}
      </div>
      <input
        className={"inputField"}
        {...register("password", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 Characters Max",
          },
          minLength: {
            value: 4,
            message: "8 characters Min",
          },
        })}
        id="password"
      />
    </div>
  );
};

export default PasswordField;
