
import './App.css'
import Fooditems from './Components/Fooditems'
import Foodheadings from './Components/Foodheadings'
import Container from './Components/Container';
import FoodInput from './Components/FoodInput'
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  const [foodItems, setFoodItems] = useState(["Dal", "Roti", "Green Veggies", "Milk", "Salad"]);

  const handleadd = (e) => {
    if (inputValue.trim()) {
      setFoodItems([...foodItems, inputValue.trim()]);
      setInputValue("");
    }

  }
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleadd();
    }
  };

  return (
    <Container>
      <Foodheadings items={foodItems}></Foodheadings>
      <FoodInput handleInput={handleInput} handleadd={handleadd} handleKeyPress={handleKeyPress} inputValue={inputValue}></FoodInput>
      <Fooditems items={foodItems} ></Fooditems>
    </Container>
  )
}

export default App
