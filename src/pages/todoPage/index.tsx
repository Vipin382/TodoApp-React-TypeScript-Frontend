import "../../styles/todoPage.scss";
import { TodoListNavbar } from "../../components/navbar/TodoListNavbar";
import { MainListContainer } from "../../components/mainList";
import { DeletePopup } from "../../components/mainList/DeletePopup";

const TodoListPage = () => {
  return (
    <div className={"todoContainer"}>
      <DeletePopup />
      <video src="/1.mp4" autoPlay loop muted className={"videoid"} />
      <div className={"section"}>
        <TodoListNavbar />
        <MainListContainer />
      </div>
    </div>
  );
};
export default TodoListPage;
