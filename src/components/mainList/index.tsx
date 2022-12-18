import "../../styles/mainContainer.scss";
import { SlOptions } from "react-icons/sl";
import { IoPersonAdd } from "react-icons/io5";
import "@fontsource/roboto";
import { AiOutlinePlus } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { showNavbar } from "../../redux/reducers/navbarSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  authTokenSelector,
  getRefreshToken,
} from "../../redux/reducers/authSlice";
import {
  createTask,
  getUser,
  taskTaskSelector,
  getAllTask,
} from "../../redux/reducers/taskSlice";
import { navBarStore } from "../../redux/store/store";
import { TaskInterface } from "../../redux/types/task.interface";
import StarComponent from "./StarComponent";
import CircleComponent from "./CircleComponent";
import TodoItemComponent from "./TodoItemComponent";
import styled from "styled-components";
import VideoPopup from "./VideoPopup";
import { setView } from "../../redux/reducers/videoRef";

navBarStore.dispatch(getRefreshToken());

const EmptyDiv = styled.div`
  border: "2px solid black";
  height: 100%;
  border-radius: 5px;
  padding: 5px;
  background-color: rgba(212, 203, 203, 0.63);
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: larger;
  font-weight: 700;
  align-items: center;
  filter: blur(0.1px);
`;

export const MainListContainer = () => {
  const [notes, setNotes] = useState("");
  const dispatch = useDispatch<any>();
  const accessToken = useSelector(authTokenSelector);
  const taskTask = useSelector(taskTaskSelector);

  const ref = useRef<any>();

  const handleNotes = async () => {
    await dispatch(createTask({ notes: notes, accessToken: accessToken }));
    dispatch(getAllTask(accessToken));
    ref.current.focus();
    setNotes("");
  };

  useEffect(() => {
    navBarStore.dispatch(getUser(accessToken));
  }, [accessToken]);

  return (
    <div className={"mainCont"}>
      <div className={"mainHeader"}>
        <div
          className={"navBtn"}
          onClick={() => {
            dispatch(showNavbar());
          }}
        >
          <GiHamburgerMenu style={{ cursor: "pointer" }} />
        </div>
        <div className={"title"}>Scheduler</div>
        <div className={"mainOptions"}>
          <IoPersonAdd style={{ cursor: "pointer" }} />
          <SlOptions
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(setView())}
          />
        </div>
        <VideoPopup />
      </div>
      <div className={"mainSection"}>
        {taskTask.length > 0 ? (
          taskTask.map((item: TaskInterface) => {
            return (
              <div className={"todoItem"} key={item.id}>
                <CircleComponent />
                <TodoItemComponent
                  task={item.task}
                  id={item.id}
                  accessToken={accessToken}
                  dateNow={item.createdAt}
                />
                <StarComponent
                  completed={item.completed}
                  task={item.task}
                  token={accessToken}
                  itemId={item.id}
                />
              </div>
            );
          })
        ) : (
          <EmptyDiv>Not Task Available</EmptyDiv>
        )}
      </div>
      <div className={"mainFooter"}>
        <div className={"noteContainer"}>
          <div className={"addNoteicon"} onClick={handleNotes}>
            <AiOutlinePlus />
          </div>
          <div className={"addNoteText"}>
            <input
              type="text"
              ref={ref}
              placeholder="Add a Task"
              className={"mainInputField"}
              onChange={(e) => setNotes(e.target.value)}
              value={notes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
