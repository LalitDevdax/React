
import './App.css'
import Fooditems from './Components/Fooditems'
import Foodheadings from './Components/Foodheadings'

function App() {

  const FoodItems = ["Dal", "Roti", "Green Veggies", "Milk", "Salad"];

  return (
    <>
      <Foodheadings items={FoodItems}></Foodheadings>
      <Fooditems items={FoodItems} ></Fooditems>
    </>
  )
}

export default App
