import { SimpleGrid,Image,Badge,Spacer,Box,Flex,Square,Center,Text, Button } from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import axios from "axios"
import { useEffect,useState } from "react";
const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }


  
function Products(){
    const [data,setData]=useState([])
const [loading,setLoading]=useState(false)
    const getData=()=>{
        setLoading(true)
      return  axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`,{
        params:{
            brand:"maybelline"
        }
      })
      }
useEffect(()=>{
    setLoading(false)
    getData().then((res)=>setData(res.data))
},[])

console.log(data)

    return(
        <div style={{backgroundColor:"#f3f3f3"}} >
<Spacer h="100px"/>
<Flex color='white' mt="100px">
  <Box ml="50px" mt="20px" w="25%" bg="red" ></Box>
  <Box p="15px" mt="20px" borderColor="black" mr="50px" w="75%" bg="#f3f3f3">
    <SimpleGrid columns={3} spacing="30px"  m="auto">
  {data.map((el)=>(
    <Box bg="white" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md'  p={2}>
      <Image m="auto" src={el.image_link} alt="beautyProduct" />
      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          color="black"
        >
{el.name}
        </Box>
        <Box>
          Rating : {el.rating}
        </Box>
        <Center  color='black'>
        {`Rs.${Math.floor(el.price*100)}`}
</Center>
<Center  color='green'>
        {`${Math.floor(Math.random()*100)}%`}
</Center>
</Box>
      <button style={{backgroundColor:"#fc2779",marginTop:"10px",fontWeight:"bolder",width:"100%",height:"30px",borderRadius:"5px"}} >Add To Cart</button>
    </Box>
  ))}
    </SimpleGrid>
  </Box>
</Flex>
        </div>
    )
}
export default Products;