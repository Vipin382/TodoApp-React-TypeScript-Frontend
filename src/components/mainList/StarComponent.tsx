import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { updateUserTask, getAllTask } from "../../redux/reducers/taskSlice";

interface StarpropsInterface {
  completed: string;
  task: string;
  token: string;
  itemId: string;
}

const StarComponent = (props: StarpropsInterface) => {
  const dispatch = useDispatch<any>();
  return (
    <div className={"mainCircle"}>
      {props.completed ? (
        <AiFillStar
          style={{ color: "#dbcb1a" }}
          onClick={async () => {
            await dispatch(
              updateUserTask({
                completed: false,
                notes: props.task,
                accessToken: props.token,
                id: props.itemId,
              })
            );
            dispatch(getAllTask(props.token));
          }}
        />
      ) : (
        <AiOutlineStar
          style={{ color: "#dbcb1a" }}
          onClick={async () => {
            await dispatch(
              updateUserTask({
                completed: true,
                notes: props.task,
                accessToken: props.token,
                id: props.itemId,
              })
            );
            dispatch(getAllTask(props.token));
          }}
        />
      )}
    </div>
  );
};

export default StarComponent;
