import React, {useState} from "react"
import { Link } from "react-router-dom"
import { useDisclosure,Modal,ModalContent,ModalOverlayButton,ModalHead,ModalBody,ModalHeader,ModalFooter,ModalCloseButton, Heading } from "@chakra-ui/react"
import {Stack,Box,Text,Input,Spacer,Button,ModalOverlay} from "@chakra-ui/react"
import { PresenceContext } from "framer-motion"
import { useContext } from "react"
import { Navigate } from "react-router-dom"
const initFormState={
    name:"",
    phoneNumber:"",
    email:"",
    password:""
}
function Signup(){

const [isSignUp,setIsSignUp]=useState(false)

    const [formState,setFormState]=useState(initFormState)
    const handleChange=(e)=>{
        const {name,value}=e.target
      setFormState((pre)=>({...pre,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
setIsSignUp(true)
setOverlay(<OverlayOne />)
                      onOpen()
        }

        const OverlayOne = () => (
            <ModalOverlay
              bg='blackAlpha.300'
              backdropFilter='blur(10px) hue-rotate(90deg)'
            />
          )
          const { isOpen, onOpen, onClose } = useDisclosure()
          const [overlay, setOverlay] = React.useState(<OverlayOne />)
        
  
          if(isSignUp){
            return (
                <>
                <Spacer h="250"/>
                
                <Heading as='h2' size='3xl' noOfLines={1} textAlign="center" color="green">Congratualations</Heading>
                <Spacer h="50"/>
                <Heading as='h2' size='xl' noOfLines={1} textAlign="center" color="#F56565">
    You are Registered with Nykaa
  </Heading>
  <Spacer h="50"/>
  <Button ml="40%" align="center"><Link to="/login" >Click Here to go to Login Page</Link></Button>
                  <Modal isCentered isOpen={isOpen} onClose={onClose}>
                    {overlay}
                    <ModalContent>
                      <ModalHeader>Congratulations</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text color="green">You are Successfully Registered with Nykaa</Text>
                      </ModalBody>
                      <ModalFooter>
                        <Button onClick={onClose} ><Link to="/login">Click Here to go to Login Page</Link></Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              )
          }
          

const {name,phoneNumber,email,password}=formState

    return (
        <form onSubmit={handleSubmit} className="signUpPage" >
            <Spacer h={200}/>
<Stack   m="auto"
        w="350px"
        spacing={3}
        boxShadow="xl"
        p="10"
        rounded="md"
        bg="white">
  <Box >Register to Earn <Box color="Red">2000  Reward Points!</Box></Box>
  <Input onChange={handleChange} name="name" value={name}  variant='flushed' placeholder='Name' required/>
  <Input onChange={handleChange} name="phoneNumber" value={phoneNumber} variant='flushed' placeholder='Phone Number' type="number" required/>
  <Input onChange={handleChange} name="email" value={email} variant='flushed' placeholder='Email Address' type="email" required/>
  <Input onChange={handleChange} name="password" value={password} variant='flushed' placeholder='Password' type="password" required/>
  <Spacer/>
{/* <Input  bg="#fc2779" color="white"  type="submit" /> */}
<Input bg="#fc2779" color="white" type="submit"/>
</Stack>
        </form>

        
    )

   
    //<Link to="/login">Submit</Link>
}
export default Signup