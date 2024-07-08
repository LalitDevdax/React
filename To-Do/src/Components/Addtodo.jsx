import { useRef } from "react";
import { useContext } from "react";

import { TodoItemsContext } from "../store/todoitems-context";

function Addtodo() {

    const { handlenewitem } = useContext(TodoItemsContext);

    const todonameelement = useRef();
    const tododateelement = useRef();


    const handlenewadd = () => {
        const inputvalue = todonameelement.current.value;
        const inputvaluedate = tododateelement.current.value;
        handlenewitem(inputvalue, inputvaluedate);
        todonameelement.current.value = ("");
        tododateelement.current.value = ("");


    }

    return <>
        <div className="container">
            <div className="row mainl-row l-row">
                <div className="col-4 fix-todo"><input type="text" placeholder='Enter To-Do Here' ref={todonameelement} /></div>
                <div className="col-4 fix-todo"><input type="date" ref={tododateelement} /></div>
                <div className="col-2 fix-btn"><button type="button" className="btn btn-success" onClick={handlenewadd}>Add</button></div>
            </div>
        </div>
    </>
}

export default Addtodo;