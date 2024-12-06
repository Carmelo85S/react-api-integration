import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Body from "./components/body/Body";
import './app.css';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Body />
      </BrowserRouter>
 
  )
}

export default App
