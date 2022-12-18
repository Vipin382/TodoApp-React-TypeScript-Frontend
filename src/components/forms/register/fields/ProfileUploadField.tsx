import React from "react";
import "../../../../styles/form.scss";
import { UseFormRegister, FieldError } from "react-hook-form";
import { RegisterformFields } from "../../../types/index";
import "../../../../styles/input.scss";

type Props = {
  register: UseFormRegister<RegisterformFields>;
  errors?: FieldError;
};

const ProfileUploadField: React.FC<Props> = ({ register, errors }) => {
  return (
    <div className={"inputContainer"}>
      {errors && <div className={"inputError"}>{errors?.message}</div>}
      <label className={"upload"} htmlFor={"profile"}>
        <input
          id={"profile"}
          style={{ display: "none" }}
          type="file"
          {...register("profile", {
            required: true,
          })}
        />
      </label>
    </div>
  );
};

export default ProfileUploadField;
