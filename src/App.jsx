import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Port from './assets/Port'
import Nav from './assets/Nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Nav/>
    
 
  <Port/> 
     
    </>
  )
}

export default App
