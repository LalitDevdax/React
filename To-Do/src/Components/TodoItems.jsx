import { useContext } from "react";
import { TodoItemsContext } from "../store/todoitems-context";

function TodoItems({ todoname, tododate }) {

    const { handledeleteitem } = useContext(TodoItemsContext)

    return <>
        <div className="container ">
            <div className="row l-row">
                <div className="col-4 to-left">{todoname}</div>
                <div className="col-4 to-left">{tododate}</div>
                <div className="col-2"><button type="button" className="btn btn-danger" onClick={() => handledeleteitem(todoname)} >Delete</button></div>
            </div>
        </div>
    </>
}
export default TodoItems;