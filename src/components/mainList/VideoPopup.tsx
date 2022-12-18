import Modal from "@mui/material/Modal";
import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setView, videoViewSelector } from "../../redux/reducers/videoRef";
import "../../styles/videoPopup.scss";

const VideoPopup = () => {
  const UserVideoHide = useSelector(videoViewSelector);
  const dispatch = useDispatch<any>();
  const [url, setUrl] = useState<any>();
  const videoRef = useRef<any>();

  const handleSubmit = () => {
    console.log(url);
  };

  return (
    <Modal
      className="videoUpdateCont"
      open={Boolean(UserVideoHide)}
      onClose={() => dispatch(setView())}
    >
      <div className="videoMainCont">
        <div className="videoRow1">
          <video src="1.mp4" autoPlay muted loop />
        </div>
        <div className="videoRow2">
          <div className="urlInput">
            <input
              type="file"
              ref={videoRef}
              title="videoUrl"
              style={{ display: "none" }}
              onClick={(e) => setUrl(e.currentTarget.value)}
            />
          </div>
          <button
            type="button"
            style={{ background: "blue", fontSize: "15px" }}
            onClick={handleSubmit}
          >
            Change Video
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default VideoPopup;
