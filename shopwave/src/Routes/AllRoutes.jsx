import { Route,Routes } from "react-router-dom";
import Login from "../Components/Login"
import Home from "../Components/Home/Home"
import Signup from "../Components/Signup";
import CartPage from "../Components/Cart/CartPage";
import Products from "../Components/Products/Products";
import PrivateRoute from "./PrivateRoute";
function AllRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>} />
<Route path="/products" element={<Products/>}/>
<Route path="/cart" element={<PrivateRoute><CartPage/>
  </PrivateRoute>}/>
  <Route path="*" element={<div><h1 style={{textAlign:"center",fontSize:"100PX",alignItems:"center",color:"red"}}>404</h1><h1 style={{textAlign:"center",fontSize:"50PX",alignItems:"center"}}>Page Not Found</h1></div>}/>
    </Routes>
  )
}
export default AllRoutes;