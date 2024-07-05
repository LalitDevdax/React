import TodoItems from "./TodoItems";
function ItemsTotal({ todoItems }) {
    return <>
        <div className="items-cont">
            {todoItems.map((lists) => <TodoItems todoname={lists.name} tododate={lists.duedate} ></TodoItems>)}


        </div>
    </>
}

export default ItemsTotal;