import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Alert,AlertIcon,AlertTitle,AlertDescription,Toast,useToast } from "@chakra-ui/react"
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

function PrivateRoute({children}){
const {state,dispatch}=useContext(AuthContext)

if(!state.isAuth){
alert('Please Login First')
  return <>
  <Navigate to="/login"/>
  </>
}
    
    return children 
}
export default PrivateRoute;