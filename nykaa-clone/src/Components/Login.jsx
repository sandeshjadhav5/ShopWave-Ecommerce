
import { useContext } from "react";
import { Button,useToast, Image,Heading, Stack, Text, Spacer, Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { useState } from "react";
import { loginSuccess } from "../Context/AuthContext/action";
import {Navigate} from "react-router-dom"

function Login() {
  const { state, dispatch } = useContext(AuthContext);
  const toast = useToast()
  const [userData,setUserData]=useState({
    email:"",
    password:"",
    userName:""
  })
  const handleChange=(e)=>{
const {name,value}=e.target;
setUserData((pre)=>({...pre,[name]:value}))
  }
const handleSubmit=(e)=>{
  e.preventDefault()
dispatch(loginSuccess(userData))

  toast({
    title: `Welcome ${userData.userName}`,
    description: "You are Succeccfully Logged in",
    status: 'success',
    duration: 6000,
    isClosable: true,
  })

return (
  <Navigate to="/"/>
)
}

if(state.isAuth){
  return <Navigate to="/"/>
}
const {email,password,userName}=userData

  return (
    <div style={{backgroundColor:"#f3f3f3",padding:"100px"}}>
      <Spacer h={100} />
      <Stack
        m="auto"
        w="350px"
        spacing={3}
        boxShadow="xl"
        p="10"
        rounded="md"
        bg="white"
        zIndex={0}
      >
        <form onSubmit={handleSubmit}>
        <Heading align="center"mb="10" colorScheme="#fc2779" as='h5' size='md' >
    LOGIN
  </Heading>
  <Input onChange={handleChange} name="userName" value={userName} variant="filled" placeholder="Name"/>
  <Spacer h={5}/>
        <Input onChange={handleChange} name="email" value={email}  variant="filled" type="email" placeholder="Email" />
        <Spacer h={5}/>
        <Input onChange={handleChange} name="password" value={password} variant="filled" type="password" placeholder="Password" />
        <Spacer h={5}/>
          <Input
            // isLoading
            m="auto"
            loadingText="Loading"
            colorScheme="#fc2779"
            variant="outline"
            bg="#fc2779"
            color="white"
            align="center"
            spinnerPlacement="start"
            type="submit"
          />
          </form>
        
        <Box>
          <Link to="/signup">Dont Have an Account ? Click Here to Sign Up</Link>
        </Box>
      </Stack>
    </div>
  );
}
export default Login;
