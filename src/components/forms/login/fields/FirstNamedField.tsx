import React from "react";
import "../../../../styles/input.scss";
import { UseFormRegister, FieldError } from "react-hook-form";
import { LoginFormFields } from "../../../types/index";

type Props = {
  register: UseFormRegister<LoginFormFields>;
  errors?: FieldError;
};
const FirstNamedField: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={"inputContainer"}>
      <div className={"header"}>
        <div className={"inputlabel"}>
          <label htmlFor={"firstname"}>{"First Name"}</label>
        </div>
        {errors && <div className={"inputError"}>{errors?.message}</div>}
      </div>
      <input
        className={"inputField"}
        {...register("username", {
          required: "Required",
          maxLength: {
            value: 32,
            message: "32 Characters Max",
          },
          minLength: {
            value: 4,
            message: "2 characters Min",
          },
        })}
        id="firstname"
      />
    </div>
  );
};

export default FirstNamedField;
