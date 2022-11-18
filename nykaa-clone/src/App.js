import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import {Spacer} from "@chakra-ui/react"
import Footer from './Components/Footer';
import Home from "./Components/Home/Home"
import {Heading} from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
    {/* <Navbar/> */}
    <AllRoutes/>
    </div>
  );
}

export default App;
