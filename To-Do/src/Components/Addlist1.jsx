function Addlist1() {

    let todoname = 'Buy Milk';
    let tododate = '02/10/2024';
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
export default Addlist1;