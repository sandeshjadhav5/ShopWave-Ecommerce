import { Route,Routes } from "react-router-dom";
import Login from "../Components/Login"
import Home from "../Components/Home/Home"
import Signup from "../Components/Signup";
function AllRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>} />
    </Routes>
  )
}
export default AllRoutes;