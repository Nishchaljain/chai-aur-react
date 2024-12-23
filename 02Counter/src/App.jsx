import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0);
 
  //let counter = 5

const addValue = ()=>{
  console.log(counter);
  
  if(counter < 5) 
  {
    setCounter(counter + 1)
  }
  else
  {
    $("#btnAddValue").hide();
  }
  
}

const removeValue = ()=>{
  setCounter(counter - 1)
}

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value : {counter}</h2>

     <button id="btnAddValue" onClick={addValue}>Increment Value</button>
     <button onClick={removeValue}>Decrement Value</button>
    </>
  )
}

export default App
