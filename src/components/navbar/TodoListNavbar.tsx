import "../../styles/todonavbar.scss";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { showNavbar } from "../../redux/reducers/navbarSlice";
import { useEffect, useState } from "react";
import {
  taskProfileTypeSelector,
  taskProfileIdSelector,
  userIdSelector,
} from "../../redux/reducers/taskSlice";
import {
  taskProfileSelector,
  taskUsernameSelector,
} from "../../redux/reducers/taskSlice";
import ProfileUpdate from "../mainList/profileUpdate";
import { authTokenSelector } from "../../redux/reducers/authSlice";
import { showProfile } from "../../redux/reducers/profileSlice";
import VideoPopup from "../mainList/VideoPopup";

export const TodoListNavbar = () => {
  const nav = useSelector((state: any) => state.navbar.show);
  const taskUsername = useSelector(taskUsernameSelector);
  const taskPofile = useSelector(taskProfileSelector);
  const profileType = useSelector(taskProfileTypeSelector);
  const profileId = useSelector(taskProfileIdSelector);
  const accessToken = useSelector(authTokenSelector);
  const userId = useSelector(userIdSelector);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");

  useEffect(() => {
    setName(taskUsername);
    setProfile(`${`data:${profileType};base64,` + taskPofile}`);
  }, [taskPofile, taskUsername, profileType]);

  return (
    <div
      className={`${nav ? "navContainer" : `${"navContainer"} ${"active"}`}`}
    >
      <div className={"navBtn"}>
        <RxCross2
          style={{
            cursor: "pointer",
            fontSize: "40px",
          }}
          onClick={() => dispatch(showNavbar())}
        />
      </div>
      <div className={"profileInfo"}>
        <div className={"profileImage"} onClick={() => dispatch(showProfile())}>
          <img src={profile} alt={"Loading..."} />
        </div>
        <h1>{name}</h1>
      </div>
      <ProfileUpdate
        userId={userId}
        accessToken={accessToken}
        photoId={profileId}
        profile={profile}
      />
    </div>
  );
};
