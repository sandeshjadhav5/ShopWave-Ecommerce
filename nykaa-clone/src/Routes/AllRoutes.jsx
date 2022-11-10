import { Route,Routes } from "react-router-dom";
import Login from "../Components/Login"
import Home from "../Components/Home/Home"
function AllRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
    </Routes>
  )
}
export default AllRoutes;