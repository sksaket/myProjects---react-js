import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordion'
Accordian

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Accordian></Accordian> 
    
    </>
  )
}

export default App
