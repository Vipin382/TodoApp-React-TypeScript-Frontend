import "../../styles/deleteTodoPopup.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  showItem,
  stateShowSelector,
  stateIdSelector,
  stateTokenSelector,
} from "../../redux/reducers/delSlice";
import { deleteUserTask, getAllTask } from "../../redux/reducers/taskSlice";

export const DeletePopup = () => {
  const showPopup = useSelector(stateShowSelector);
  const idPopup = useSelector(stateIdSelector);
  const tokenPopup = useSelector(stateTokenSelector);
  const dispatch = useDispatch<any>();

  return (
    <div
      className={`${showPopup ? "DeleteContainer active" : "DeleteContainer"}`}
    >
      <div className="popupMain">
        <div className="col-1">
          <h3 className="popH3">Are You Sure?</h3>
          <p className="popupp">
            Do you really want to delete these records?This process cannot be
            undone
          </p>
        </div>
        <div className="col_2">
          <button
            type="button"
            onClick={async () => {
              await dispatch(
                deleteUserTask({ id: idPopup, accessToken: tokenPopup })
              );
              dispatch(showItem({ id: "", show: false, accessToken: "" }));
              dispatch(getAllTask(tokenPopup));
            }}
          >
            Ok
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(showItem({ id: "", show: false, accessToken: "" }));
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
