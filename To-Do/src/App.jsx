
import './App.css';
import Appname from './Components/Appname';
import Addtodo from './Components/Addtodo';
import ItemsTotal from './Components/ItemsTotal';
import TodoItemsContextProvider from './store/todoitems-context';



function App() {
  return (

    <TodoItemsContextProvider>

      <div className="container">
        <div className="mainbox">
          <Appname />
          <Addtodo />
          <ItemsTotal ></ItemsTotal>
        </div>
      </div>
    </TodoItemsContextProvider>

  );
}

export default App;
