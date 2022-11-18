import {useContext} from "react"
import Navbar from "../Navbar"
import { Link } from "react-router-dom"
import { CheckIcon } from '@chakra-ui/icons'
import {Box,Heading,useDisclosure,Flex,Spacer,Text,Image,Input,Button,Divider, Center} from "@chakra-ui/react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import {CartContext} from "../../Context/CartContext/CartContext";


function CartPage(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {cartData,setCartData}=useContext(CartContext)
    let sum=0
    console.log(cartData)
    for(let i=0;i<cartData.length;i++){
sum+=Math.floor((cartData[i].price)*100)
    }

    const handlePayment=()=>{
        setCartData([])
        // onClose
    }
    return(
        <div>
            <Navbar/>
            <Spacer h="120px"/>

<Flex ml="100px" mr="100px">
    <Box w="70%"><Heading>Choose payment Method</Heading>
    <Text>Choose the payment method you prefer</Text>
    </Box>
    <Box w="30%">
        <Image mt="-18px" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/desktop-icons/payment-icon.svg"/>
    </Box>
</Flex>
<Text ml="100px" fontSize="larger" as="b">Payment Method Options</Text>
<Flex  ml="100px" mr="100px">

    <Flex>
        <Box w="320px" bg="#f3f4f5" border='1px' borderColor='gray.200'  borderRadius={5}>
            <Box p={1} bg="#f3f4f5">
            <Text noOfLines={1}>
                Credit/Debit Card
            </Text>
            <Text color="gray" noOfLines={1}>
                Visa,MasterCard,Rupay and More
            </Text>

            </Box>
            <Box p={1} bg="white">
            <Text noOfLines={1}>
                UPI
            </Text>
            <Text color="gray" noOfLines={1}>
            Google Pay, PhonePe, Paytm & more
            </Text>

            </Box>
            <Box p={1} bg="#f3f4f5">
            <Text noOfLines={1}>
                Net Banking
            </Text>
            <Text color="gray" noOfLines={1}>
            Pay through your favourite bank
            </Text>

            </Box>
            <Box p={1} bg="#f3f4f5">
            <Text noOfLines={1}>
                Shop Now and Pay Later
            </Text>
            <Text color="gray" noOfLines={1}>
            Zest money, Simpl & more
            </Text>

            </Box>
            <Box p={1} bg="#f3f4f5">
            <Text noOfLines={1}>
                Cash On Delievery
            </Text>
            <Text color="gray" noOfLines={1}>
            Pay at your doorstep
            </Text>

            </Box>
            <Box p={1} mb={2} bg="#f3f4f5">
            <Text noOfLines={1}>
                Paytm Wallet
            </Text>
            <Text color="gray" noOfLines={1}>
            Link your Paytm wallet and pay
            </Text>

            </Box>
            <Box p={1} mb={2} bg="#f3f4f5">
            <Text noOfLines={1}>
                Gift Card
            </Text>
            <Text color="gray" noOfLines={1}>
            One card for all Nykaa apps
            </Text>

            </Box>
        </Box>
        <Box p={3} w="400px" border='1px' padding={5} borderColor='gray.200'  borderRadius={5}>
            <Heading size="lg">UPI
            </Heading>
            <Text mt="30px">1.Select UPI App</Text>
            <Flex m="auto" mt="10px">
                <Image m="auto" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/GPay_01.svg"/>
                <Image m="auto" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/PhonePe.svg"/>
                <Image m="auto" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/Paytm.svg"/>
                <Image m="auto" src="https://adn-static1.nykaa.com/media/wysiwyg/Payments/UPImWeb/UPI-Logo-vector%201.svg"/>
            </Flex>
            <Flex m="auto" ml="-6px">
               <Text m="auto">Google Pay</Text>
               <Text m="auto">Phone Pay</Text>
               <Text m="auto">Paytm</Text>
               <Text m="auto">Other UPI</Text>
            </Flex>
            <Text mt="30px">2.Enter UPI/VPA Id</Text>
            <Input mt="10px" placeholder='Enter UPI ID' required size='lg' />
            <Button onClick={onOpen} w="100%" mt="20px" color="white" bg="#e80071">{`Verify & Pay Rs.${sum}`} </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Center><CheckIcon w="50px" h="50px"/></Center>
            <Heading textAlign="center" color="green">Order Successfully Placed</Heading>
            <Heading mt="10px" textAlign="center" color="#e80071" size="sm">Thank You For Shopping with Nykaa</Heading>
          </ModalBody>

          <ModalFooter>
            <Link w="100%" to="/"><Button bg="#e80071" colorScheme='green' w="400px" onClick={handlePayment}>
             Continue Shopping on Nykaa
            </Button></Link>
            </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
    </Flex>
    <Box>
        <div className="parentDiv">
            <div className="childDiv">
                <Heading size="lg">Bag</Heading>
                <Divider mt="5px"/>
                {cartData.map((el)=>(
                    <>
                    <Flex>
                        <Image w="100px" mr="10px" src={el.image_link}/>
                        <Box ml={10}>
                        <Text mt="10px">{el.name}</Text>
                        <Text mt="5px" as="b">{`Rs.${Math.floor(el.price*100)}`}</Text>
                         </Box>
                    </Flex>
 <Divider color="black"/>
 </>
                ))}
                <h1>{`Total= Rs.${sum}`}</h1>
            </div>
        </div>
    </Box>
</Flex>
        </div>
    )
}
export default CartPage;