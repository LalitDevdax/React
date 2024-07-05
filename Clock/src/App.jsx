
import './App.css'
import ClockDesc from './Components/ClockDesc'
import ClockName from './Components/ClockName'
import ClockShow from './Components/ClockShow'
import './App.css';

function App() {

  return <>
    <div className='MainBox'>
      <ClockName></ClockName>
      <ClockDesc></ClockDesc>
      <ClockShow></ClockShow>
    </div>

  </>
}

export default App
