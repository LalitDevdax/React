import React from 'react';
import './App.css';
import Appname from './Components/Appname';
import Addtodo from './Components/Addtodo';
import Addlist1 from './Components/Addlist1';
import Addlist2 from './Components/Addlist2';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="mainbox">
          <Appname />
          <Addtodo />
          <div className="items-cont">
            <Addlist1 />
            <Addlist2 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
