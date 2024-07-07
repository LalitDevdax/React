import { useState } from "react";

function Addtodo({ onnewitem }) {

    const [inputvalue, setInputvalue] = useState();
    const [inputvaluedate, setInputvaluedate] = useState();

    const handleinputname = (e) => {
        setInputvalue(e.target.value);
    }
    const handleinputdate = (e) => {
        setInputvaluedate(e.target.value);

    }

    const handlenewadd = () => {
        onnewitem(inputvalue, inputvaluedate);
        setInputvalue("");
        setInputvaluedate("");

    }

    return <>
        <div classNameName="container">
            <div className="row mainl-row l-row">
                <div className="col-4 fix-todo"><input type="text" placeholder='Enter To-Do Here' onChange={handleinputname} value={inputvalue} /></div>
                <div className="col-4 fix-todo"><input type="date" onChange={handleinputdate} value={inputvaluedate} /></div>
                <div className="col-2 fix-btn"><button type="button" className="btn btn-success" onClick={handlenewadd}>Add</button></div>
            </div>
        </div>
    </>
}

export default Addtodo;