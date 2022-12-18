import "../../styles/profileUpdate.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { getUser, taskUsernameSelector } from "../../redux/reducers/taskSlice";
import Modal from "@mui/material/Modal";
import {
  profileSelector,
  showProfile,
} from "../../redux/reducers/profileSlice";
import {
  updateProfileById,
  updateUsernameById,
} from "../../redux/reducers/taskSlice";

const ProfileUpdate = (props: {
  userId: string;
  accessToken: string;
  photoId: string;
  profile: string;
}) => {
  const dispatch = useDispatch<any>();
  const ref = useRef<any>();
  const [image, setImage] = useState<any>();
  const [name, setName] = useState<any>("");
  const username = useSelector(taskUsernameSelector);
  const profileShow = useSelector(profileSelector);

  const handleImageUpdate = async () => {
    await dispatch(
      updateProfileById({
        id: props.photoId,
        accessToken: props.accessToken,
        file: image[0],
      })
    );
    dispatch(getUser(props.accessToken));
    dispatch(showProfile());
    setImage(null);
  };
  const handleUsernameUpdate = async () => {
    await dispatch(
      updateUsernameById({
        id: props.userId,
        accessToken: props.accessToken,
        username: name,
      })
    );
    dispatch(getUser(props.accessToken));
    dispatch(showProfile());
    setName("");
  };

  return (
    <Modal
      className="profileUpdateCont"
      open={Boolean(profileShow)}
      onClose={() => dispatch(showProfile())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="profileContMain">
        <div className="profileCol">
          <div className="profileImgCol">
            <img src={props.profile} alt="loading..." className="proImg" />
          </div>
          <p>{username}</p>
        </div>
        <div className="updateCol">
          <div className="row1">
            <div className="uploadImgBtn" onClick={() => ref.current.click()}>
              <input
                ref={ref}
                type="file"
                name="file"
                title="image"
                style={{ display: "none" }}
                onChange={(e) => setImage(e.target.files)}
              />
            </div>
            <button
              className="updatebtn"
              style={{ backgroundColor: "#24b907", fontSize: "15px" }}
              onClick={handleImageUpdate}
            >
              Edit Image
            </button>
          </div>
          <div className="row1">
            <input
              type="text"
              name="usernane"
              title="profile"
              style={{
                height: "25px",
                outline: "none",
                border: "0.1px solid rgba(0, 0, 0, 0.122)",
                color: "rgba(0, 0, 0, 0.522)",
              }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button
              className="updatebtn"
              style={{ backgroundColor: "#24b907", fontSize: "15px" }}
              onClick={handleUsernameUpdate}
            >
              Update Username
            </button>
          </div>
          <button className="logbtn">Logout</button>
        </div>
      </div>
    </Modal>
  );
};

export default ProfileUpdate;
