import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import './app.css';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
 
  )
}

export default App
