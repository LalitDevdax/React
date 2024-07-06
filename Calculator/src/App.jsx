import './App.css'
import CalcName from './Components/CalcName'
import CalculatorElements from './Components/CalculatorElements';
import CalcInput from './Components/CalcInput';
import { useState } from 'react';


function App() {

  const CalcElements = ["AC", "%", "X", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];

  const [calval, setCalval] = useState('');

  const onButtonClick = (ButtonText) => {
    if (ButtonText === 'AC') {
      setCalval('');

    } else if (ButtonText === '=') {
      try {
        const result = eval(calval);
        setCalval(result.toString());
      } catch (error) {
        setCalval('Error');
      }
    } else {
      const newval = calval + ButtonText;
      setCalval(newval);

    }
  };


  return (
    <>
      <div className='CalcBox'>
        <CalcName></CalcName>
        <CalcInput displayvalue={calval}></CalcInput>
        <CalculatorElements elements={CalcElements} displayvalue={calval} onButtonClick={onButtonClick}></CalculatorElements>
      </div>
    </>
  )
}

export default App
