import { Spacer, Image, Heading, SimpleGrid, Box ,Badge,Text} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons"
import CarouselOne from "./CarouselOne";
import CarouselTwo from "./CarouselTwo";
import CarouselThree from "./CarouselThree";
import CarouselFour from "./CarouselFour";
import CarouselFive from "./CarouselFive";
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
    <Spacer h={110}/>
    
      <CarouselOne />
      <Spacer h="50px" />

      <div
        style={{
          width: "90%",
          margin: "auto",
          padding: "15px",
          backgroundColor: "#f3f3f3",
        }}
      >
        {/* <CarouselTwo /> */}
      </div>
      
      <div style={{ backgroundColor: "#f3f3f3" }} >
        <Image
          m="auto"
          w="90%"
          p="10"
          src="https://images-static.nykaa.com/uploads/a47a4ec4-140c-4035-8b85-629db661a638.jpg?tr=w-1200,cm-pad_resize"
        />
        <Link to="/products">
        <Heading
          textAlign="center"
          fontSize="30"
          fontWeight="15"
          color="#90414d"
        >
          TOP BRANDS
        </Heading>
        </Link>
        <SimpleGrid w="80%" m="auto" mt="15" columns={2} spacing={10} >
          <Box  height="320"  boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/fe1628ec-9c9c-445a-8a8d-29a2517570a9.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/ca81f059-d8ce-4ecf-ae4c-d5421925ac71.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/7ec23965-8ab3-4315-b56f-cc8b61557080.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/b140ddef-98b9-4bd6-a4ff-9769c476a8b7.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/03c9f4e8-6462-40a2-b1f6-fd97e1c9a950.gif?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/09c8b563-39ef-45e7-b286-ffd014da6652.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box  height="320" boxShadow='dark-lg' bg='white'>
          <Image  src="https://images-static.nykaa.com/uploads/a8a8ea5d-f1e6-4da6-a917-f717179ac034.jpg?tr=w-600,cm-pad_resize" />
        </Box>
        <Box  height="320" boxShadow='dark-lg' bg='white'>
          <Image  src="https://images-static.nykaa.com/uploads/c619ceb6-7e8e-4370-9961-bfdad63439e2.jpg?tr=w-600,cm-pad_resize" />
        </Box>
        </SimpleGrid>
        {/* <CarouselThree/> */}
        <SimpleGrid w="80%" m="auto" mt="15" columns={2} spacing={10}>
          <Box  height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/fe1628ec-9c9c-445a-8a8d-29a2517570a9.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/4dbcf6cc-a457-4ffb-a017-d853f063642e.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/7ec23965-8ab3-4315-b56f-cc8b61557080.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320" boxShadow='dark-lg' bg='white'>
            <Image src="https://images-static.nykaa.com/uploads/b140ddef-98b9-4bd6-a4ff-9769c476a8b7.jpg?tr=w-600,cm-pad_resize" />
          </Box>
        </SimpleGrid>
        <Heading
          textAlign="center"
          fontSize="25"
          fontWeight="20"
          color="#4d464d"
          mt={45}
          mb={5}
        >
          ONLY AT NYKAA
        </Heading>
        <Link to="/products"></Link>
        <Box w="100%" pb={5} h={350} bg="#fbe2e8">
          <Image w="100%" src="https://images-static.nykaa.com/uploads/6892016b-f17f-4ddb-b463-452ef88fc8d6.png?tr=w-1200,cm-pad_resize"/>
          <SimpleGrid m="auto" columns={7} spacing={5}>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/a5fb58d0-4b5a-4f7b-8ce1-6a6f3b04e542.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/174cc9a9-73ce-47b3-8776-a534cfdc929b.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/e3ab0467-73b2-418b-bcb0-9f456d1c9458.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/260c7929-ee2c-4efa-a300-e33afd207f00.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/25c00bd4-d1d7-4404-b76d-77466680b7cf.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
            <Box>
              <Image src="https://images-static.nykaa.com/uploads/b02ec567-2bee-449e-b320-39116cfca7c3.jpg?tr=w-200,cm-pad_resize"/>
            </Box>
          </SimpleGrid>
        </Box>
        <Heading
          textAlign="center"
          fontSize="25"
          fontWeight="20"
          color="black"
          mt={45}
          mb={5}
        >
          BESTSELLERS
        </Heading>
        <SimpleGrid columns={7} spacing={10}>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/6/7/67a7f79LOREA00000002_1.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/4/7430fedNYKAC00000526_1.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/f/b/fb6d29a773602010486_rv__1.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/d/cd0f1fb4710032517839_1.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/f/0f0e4e88904330901926_1.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/0/703768a667555514545.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow='md'  rounded='md' bg='white' p={2}>
    <Badge borderRadius='half' px='2' colorScheme='blue'>
            BESTSELLER
          </Badge>
      <Image src="https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/2/4/24e6c50NYCETA0000010_1.jpg" alt="beautyProduct" />

      <Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
        </Box>
        <Box>
          2 Sizes
        </Box>
        <Box display='flex' mt='2' alignItems='center'>  ₹699
          <Box as='span' ml='2' color='gray.400' fontSize='sm'>
          ̶ ̶₹̶8̶9̶9̶</Box>
          <Box ml='2' color='green.400' fontSize='sm'>15%</Box>
        </Box>
      </Box>
    </Box>
        </SimpleGrid>
        <Heading
          textAlign="center"
          fontSize="25"
          fontWeight="20"
          color="#4d464d"
          mt={45}
          mb={5}
        >
          FEATURED BRANDS
        </Heading>
        <SimpleGrid columns={4} m="auto" w="80%" spacing={10}>
        <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/e56f43f6-0f07-412f-a300-8ffde7036a8c.jpg?tr=w-300,cm-pad_resize"/>
             <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>      
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/88264610-8b99-45e1-936b-f76fb5f0ee7b.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/6ea1c6f1-6e7a-434d-ba45-67e778d47b4b.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/02a3c530-711c-4fb0-89a8-ee68215eddc3.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/ada05424-3436-4f3d-9c51-dae9c0733466.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/af94358f-87a6-484a-b105-63b92e9019d6.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/4ba71dba-03c2-4eac-8347-f5d6dea6240d.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/52d3c769-9f88-4912-ab09-88789acf17fd.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} m="auto" w="39%" mt={10} spacing={10}>
        <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/aedce902-5bcc-4ed1-a28c-5ab2b3c2fed4.jpg?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
            <Box boxShadow='md'  rounded='md' bg='white'>
              <Image src="https://images-static.nykaa.com/uploads/38ce9084-1f44-4e79-bee7-f561e45acef9.gif?tr=w-300,cm-pad_resize"/>
              <Text color="#fc4086" textAlign="center">Upto 20% Off + Select Your Free Serum </Text>   
             <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
            </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} m="auto" w="80%" mt={10} spacing={10}>
        <Box boxShadow='md'  rounded='md' bg='white' >
          <Image src="https://images-static.nykaa.com/uploads/ea13aa95-2adf-4686-ab33-b2fabca4edc2.jpg?tr=w-600,cm-pad_resize"/>
           </Box>
           <Box boxShadow='md'  rounded='md' bg='white'>
          <Image src="https://images-static.nykaa.com/uploads/f17129eb-c43a-41c8-98ab-88db86c79957.jpg?tr=w-600,cm-pad_resize"/>
           </Box>
        </SimpleGrid>
        
        <Box  m="auto" w="39%" mt={7} boxShadow='md' rounded='md' bg='white'>
        <Image src="https://images-static.nykaa.com/uploads/25f04cf1-475c-4172-a33b-006159ebc06e.jpg?tr=w-600,cm-pad_resize"/>
        </Box>
        <SimpleGrid  boxShadow='md' rounded='md' bg='white' backgroundImage="https://images-static.nykaa.com/uploads/8cd63895-aa42-4d65-b307-eeb3bb8207ea.jpg?tr=w-1200,cm-pad_resize" h={300} columns={2} m="auto" w="80%" mt={10} spacing={10}>
          <Box></Box>
          <Box><CarouselFour/></Box>
        </SimpleGrid>
        <Heading
          textAlign="center"
          fontSize="25"
          fontWeight="20"
          color="#4d464d"
          mt={45}
          mb={5}
        >
          CATEGORY IN FOCUS
        </Heading>
{/* <CarouselFive/> */}
      </div>
      <Heading
          textAlign="center"
          fontSize="25"
          fontWeight="20"
          color="#4d464d"
          mt={45}
          mb={5}
        >
         Brands You Can't Miss
        </Heading>

    </>
  );
}

export default Home;

