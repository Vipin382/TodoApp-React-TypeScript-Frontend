import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../redux/reducers/delSlice";

interface DeleteComponentInterface {
  accessToken: string;
  id: string;
}

const DeleteComponent = (props: DeleteComponentInterface) => {
  const dispatch = useDispatch<any>();

  return (
    <div>
      <MdDelete
        style={{ color: "red", cursor: "pointer" }}
        onClick={() =>
          dispatch(
            deleteItem({
              id: props.id,
              show: true,
              accessToken: props.accessToken,
            })
          )
        }
      />
    </div>
  );
};

export default DeleteComponent;
