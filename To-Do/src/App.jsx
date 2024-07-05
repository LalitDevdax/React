import React from 'react';
import './App.css';
import Appname from './Components/Appname';
import Addtodo from './Components/Addtodo';
import ItemsTotal from './Components/ItemsTotal';
import TodoItems from './Components/TodoItems';



function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      duedate: "02/10/2024",
    },
    {
      name: "Go College",
      duedate: "10/12/2099",
    },
    {
      name: "Bye Bye",
      duedate: "05/06/2024",
    },
  ];


  return (
    <>
      <div className="container">
        <div className="mainbox">
          <Appname />
          <Addtodo />
          <ItemsTotal todoItems={todoItems}></ItemsTotal>
        </div>
      </div>
    </>
  );
}

export default App;
