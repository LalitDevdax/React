function Addtodo() {
    return <>
        <div classNameName="container">
            <div className="row mainl-row l-row">
                <div className="col-4 fix-todo"><input type="text" placeholder='Enter To-Do Here' /></div>
                <div className="col-4 fix-todo"><input type="date" /></div>
                <div className="col-2 fix-btn"><button type="button" className="btn btn-success">Add</button></div>
            </div>
        </div>
    </>
}

export default Addtodo;