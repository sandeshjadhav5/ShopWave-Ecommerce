import { Route,Routes } from "react-router-dom";
import Login from "../Components/Login"
import Home from "../Components/Home/Home"
import Signup from "../Components/Signup";
import Products from "../Components/Products/Products";
function AllRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>} />
<Route path="/products" element={<Products/>}/>
    </Routes>
  )
}
export default AllRoutes;