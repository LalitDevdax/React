import { createContext } from "react";
import React, { useReducer } from 'react';


export const TodoItemsContext = createContext([{
    todo: [],
    addhandlenewitem: () => { },
    handledeleteitem: () => { },

}]);

const newreducerfunction = (currvalue, action) => {
    let newvalue = currvalue;
    if (action.type === "NEW_ITEM") {

        if (action.payload.itemName.trim() && action.payload.itemDate.trim()) {
            newvalue =
                [...currvalue, {
                    name: action.payload.itemName,
                    duedate: action.payload.itemDate,
                },];
        }

    } else if (action.type === 'DELETE_ITEM') {
        newvalue = currvalue.filter(item => item.name !== action.payload.itemName);
    }

    return newvalue;
}


const TodoItemsContextProvider = ({ children }) => {
    const [todo, dispatchtodoitems] = useReducer(newreducerfunction, []);

    const handlenewitem = (itemName, itemDate) => {

        const newadditemAction = {

            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDate,
            }
        };

        dispatchtodoitems(newadditemAction);

    }

    const handledeleteitem = (todoitemname) => {
        const deleteitemAction = {

            type: "DELETE_ITEM",
            payload: {
                itemName: todoitemname
            }
        };

        dispatchtodoitems(deleteitemAction);
    }

    return (
        <TodoItemsContext.Provider value={{
            todo,
            handlenewitem,
            handledeleteitem,
        }}>{children}

        </TodoItemsContext.Provider >


    )
}

export default TodoItemsContextProvider;