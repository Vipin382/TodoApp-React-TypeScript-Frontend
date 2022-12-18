import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DeleteComponent from "./DeleteComponent";
import { formatDistanceToNow, parseISO } from "date-fns";

interface TaskInterface {
  task: string;
  id: string;
  accessToken: string;
  dateNow: string;
}

const TodoItemComponent = (props: TaskInterface) => {
  const [today, setToday] = useState(false);

  return (
    <div className={"todoItemsection"}>
      <h3
        style={{
          marginTop: "0px",
          marginBottom: "0px",
          overflow: "clip",
          maxHeight: "25px",
        }}
      >
        {props.task}
      </h3>
      <span
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
          height: "20px",
          gap: "10px",
        }}
      >
        <AiOutlineCalendar
          style={{
            color: `${today ? "blue" : "red"}`,
          }}
          onClick={() => {
            setToday(!today);
          }}
        />
        <DeleteComponent id={props.id} accessToken={props.accessToken} />
        <p>{`${formatDistanceToNow(parseISO(props.dateNow))} ago`}</p>
      </span>
    </div>
  );
};

export default TodoItemComponent;
