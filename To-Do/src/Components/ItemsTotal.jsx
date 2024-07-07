import TodoItems from "./TodoItems";
function ItemsTotal({ todoItems, handledeleteitem }) {
    return <>
        <div className="items-cont">
            {todoItems.map((lists) => <TodoItems key={lists.name} todoname={lists.name} tododate={lists.duedate} handledeleteitem={handledeleteitem}></TodoItems>)}


        </div>
    </>
}

export default ItemsTotal;