import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components'
StarRating
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StarRating></StarRating>
    </>
  )
}

export default App
