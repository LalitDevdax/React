import { useContext } from "react";
import TodoItems from "./TodoItems";
import { TodoItemsContext } from "../store/todoitems-context";
const ItemsTotal = () => {
    const { todo } = useContext(TodoItemsContext);
    return <>
        <div className="items-cont">
            {todo.map((lists) => <TodoItems key={lists.name} todoname={lists.name} tododate={lists.duedate} ></TodoItems>)}


        </div>
    </>
}

export default ItemsTotal;