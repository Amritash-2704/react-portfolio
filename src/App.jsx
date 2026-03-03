import { useState } from 'react'
import './App.css'
import Navbar from "./shared/components/Navbar";
import AppRoutes from "./routes/AppRoutes";


function App() {
  // const [count, setCount] = useState(0)/

  return (
    <>
      <Navbar />
      <AppRoutes />
    </>
  )
}

export default App
