import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home/Home"
import {Heading} from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    </div>
  );
}

export default App;
