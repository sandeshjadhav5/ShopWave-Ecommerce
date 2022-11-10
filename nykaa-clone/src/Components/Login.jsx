import { useContext } from "react"
import {Button, Image, Stack,Spacer} from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import { AuthContext } from "../Context/AuthContext/AuthContextProvider"

function Login(){
  const {state,dispatch}=useContext(AuthContext)
  return (
    <>
<Spacer h={250}/>
<Stack m="auto" w="350px" spacing={3} boxShadow='xl' p='10' rounded='md' bg='white'>
 
  <Input variant='filled' placeholder='Email' />
  <Input variant='filled' placeholder='Password' />
  <Stack direction='row' spacing={4} align='center'>
  <Button
    // isLoading
    m="auto"
    loadingText='Loading'
    colorScheme='teal'
    variant='outline'
    spinnerPlacement='start'
  >
    Submit
  </Button>
 
</Stack>
</Stack>

    </>
  )
}
export default Login;