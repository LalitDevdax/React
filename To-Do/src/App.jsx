import React, { useState } from 'react';
import './App.css';
import Appname from './Components/Appname';
import Addtodo from './Components/Addtodo';
import ItemsTotal from './Components/ItemsTotal';
import TodoItems from './Components/TodoItems';



function App() {

  const [todo, setTodo] = useState([])

  const handlenewitem = (itemName, itemDate) => {
    if (itemName.trim() && itemDate.trim()) {
      const newTodoItems = [...todo, {
        name: itemName,
        duedate: itemDate
      },];
      setTodo(newTodoItems);
    }

  }

  const handledeleteitem = (todoitemname) => {
    const newtodoarray = todo.filter(item => item.name !== todoitemname);
    setTodo(newtodoarray);
  }


  return (
    <>
      <div className="container">
        <div className="mainbox">
          <Appname />
          <Addtodo onnewitem={handlenewitem} />
          <ItemsTotal todoItems={todo} handledeleteitem={handledeleteitem}></ItemsTotal>
        </div>
      </div>
    </>
  );
}

export default App;
