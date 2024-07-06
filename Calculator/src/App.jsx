import './App.css'
import CalcName from './Components/CalcName'
import CalculatorElements from './Components/CalculatorElements';
import CalcInput from './Components/CalcInput';


function App() {

  const CalcElements = ["AC", "%", "X", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];

  return (
    <>
      <div className='CalcBox'>
        <CalcName></CalcName>
        <CalcInput></CalcInput>
        <CalculatorElements elements={CalcElements}></CalculatorElements>
      </div>
    </>
  )
}

export default App
