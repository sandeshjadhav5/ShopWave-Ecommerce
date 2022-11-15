import React from "react"
import {useContext} from "react";
import { useReducer } from "react";
import reducer from "./reducer"
 export const AuthContext=React.createContext();

 const initState={
  isAuth:false,
  isLoading:false,
  isError:false,
  email:"",
  password:"",
 }

function AuthContextProvider({children}){
const [state,dispatch]=useReducer(reducer,initState)
const value={state,dispatch}
  return(
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
 }
 export default AuthContextProvider;