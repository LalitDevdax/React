function TodoItems({ todoname, tododate }) {

    return <>
        <div className="container ">
            <div className="row l-row">
                <div className="col-4 to-left">{todoname}</div>
                <div className="col-4 to-left">{tododate}</div>
                <div className="col-2"><button type="button" className="btn btn-danger">Delete</button></div>
            </div>
        </div>
    </>
}
export default TodoItems;