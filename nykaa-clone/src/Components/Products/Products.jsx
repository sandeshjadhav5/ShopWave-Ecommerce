import { useState } from "react";
import React from "react";
import Navbar from "../Navbar";
import {
  Button,
  Select,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
  useToast,
  SimpleGrid,
  Image,
  Badge,
  MenuItemOption,
  MenuButton,
  Menu,
  MenuOptionGroup,
  MenuList,
  MenuDivider,
  Spacer,
  Box,
  Flex,
  Square,
  Center,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import CartContextProvider from "../../Context/CartContext/CartContext";
import { useEffect, useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import {
  Skeleton,
  Heading,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Footer from "../Footer";
import { AuthContext } from "../../Context/AuthContext/AuthContextProvider";

function Products() {
  const { cartData, setCartData, handleAddToCart } = useContext(CartContext);
  const { state } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState({ brand: "maybelline" });
  const [loading, setLoading] = useState(true);
  const [productType, setProductType] = useState({
    product_type: "lipstick",
  });
  const handleSelectBrand = (e) => {
    const { name, value } = e.target;
    setBrand((pre) => ({ ...pre, [name]: value }));
  };
  const handleSelectType = (e) => {
    const { name, value } = e.target;
    setBrand((pre) => ({ ...pre, [name]: value }));
  };
  const [order, setOrder] = useState("asc");

  setTimeout(myFunction, 2000);
  function myFunction() {
    setLoading(false);
  }
  const getData = () => {
    return axios.get(`https://makeup-api.herokuapp.com/api/v1/products.json`, {
      params: {
        brand: brand.brand,
        product_type: productType.product_type,
      },
    });

    setLoading(false);
  };
  //console.log(cartData)
  useEffect(() => {
    getData().then((res) => setData(res.data));
    console.log(data);
  }, [brand, productType]);

  if (loading) {
    return (
      <>
        <Navbar />
        <Spacer h="200px" />
        <Flex>
          <Box w="25%"></Box>
          <Box w="75%" p="15px" borderColor="black" mr="50px">
            <SimpleGrid minChildWidth="250px" spacing="30px" mb={1} m="auto">
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
              <Skeleton height="300px" />
            </SimpleGrid>
          </Box>
        </Flex>
      </>
    );
  }
  const { product } = productType;
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <Navbar />
      <Spacer h="150px" />
      <Heading textAlign="center" h="50px">
        All Products
      </Heading>
      <Flex color="white">
        <Box ml="50px" mt="20px" w="25%" bg="white">
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} w="100%" color="black" colorScheme="green">
              Sort By :
            </MenuButton>
            <MenuList colorScheme="white" color="black" minWidth="310px">
              <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                <MenuItemOption value="asc">Ascending</MenuItemOption>
                <MenuItemOption value="desc">Descending</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>

          <Select
            p="2"
            mt="10px"
            onChange={handleSelectType}
            name="product"
            value={product}
            variant="flushed"
            color="black"
            placeholder="Product Type"
          >
            <option value="lipstick">LipStick</option>
            <option value="eyeliner">Eyeliner</option>
            <option value="cream">Cream</option>
            <option value="powder">Powder</option>
            <option value="option3">Eyeliner</option>
            <option value="option3">Eyeshadow</option>
            <option value="option3">Foundation</option>
            <option value="option3">Lip Liner</option>
          </Select>

          <Select
            p="2"
            mt="10px"
            onChange={handleSelectBrand}
            name="brand"
            value={brand}
            variant="flushed"
            color="black"
            placeholder="Brands"
          >
            <option value="maybelline">Maybelline</option>
            <option value="covergirl">Covergirl</option>
            <option value="dior">Dior</option>
            <option value="l'oreal">Loreal Parris</option>
            <option value="zorah">Zorah</option>
            <option value="pacifica">Pacifica</option>
            <option
              value="almay
"
            >
              Almay
            </option>
          </Select>
          <Select
            p="2"
            mt="10px"
            variant="flushed"
            color="black"
            placeholder="Price"
          >
            <option value="option1">Bb cc</option>
            <option value="option2">LipGloss</option>
            <option value="option3">Powder</option>
            <option value="option3">Cream</option>
            <option value="option3">Pencil</option>
            <option value="option3">Liquid</option>
            <option value="option3">Gel</option>
          </Select>
          <Select
            p="2"
            mt="10px"
            variant="flushed"
            color="black"
            placeholder="Discount"
          >
            <option value="option1">Bb cc</option>
            <option value="option2">LipGloss</option>
            <option value="option3">Powder</option>
            <option value="option3">Cream</option>
            <option value="option3">Pencil</option>
            <option value="option3">Liquid</option>
            <option value="option3">Gel</option>
          </Select>
          <Select
            p="2"
            mt="10px"
            variant="flushed"
            color="black"
            placeholder="Avg. Customer Rating"
          >
            <option value="option1">Bb cc</option>
            <option value="option2">LipGloss</option>
            <option value="option3">Powder</option>
            <option value="option3">Cream</option>
            <option value="option3">Pencil</option>
            <option value="option3">Liquid</option>
            <option value="option3">Gel</option>
          </Select>
          <Select
            p="2"
            mt="10px"
            variant="flushed"
            color="black"
            placeholder="Preference"
          >
            <option value="option1">Bb cc</option>
            <option value="option2">LipGloss</option>
            <option value="option3">Powder</option>
            <option value="option3">Cream</option>
            <option value="option3">Pencil</option>
            <option value="option3">Liquid</option>
            <option value="option3">Gel</option>
          </Select>
          <Select
            p="2"
            mt="10px"
            variant="flushed"
            color="black"
            placeholder="Concern"
          >
            <option value="option1">Bb cc</option>
            <option value="option2">LipGloss</option>
            <option value="option3">Powder</option>
            <option value="option3">Cream</option>
            <option value="option3">Pencil</option>
            <option value="option3">Liquid</option>
            <option value="option3">Gel</option>
          </Select>
          <Select
            p="2"
            mt="10px"
            variant="flushed"
            color="black"
            placeholder="Gender"
          >
            <option value="option1">Bb cc</option>
            <option value="option2">LipGloss</option>
            <option value="option3">Powder</option>
            <option value="option3">Cream</option>
            <option value="option3">Pencil</option>
            <option value="option3">Liquid</option>
            <option value="option3">Gel</option>
          </Select>
        </Box>
        <Box p="15px" borderColor="black" mr="50px" w="75%" bg="#f3f3f3">
          <SimpleGrid minChildWidth="250px" spacing="30px" m="auto">
            {data.map((el) => (
              <Box
                bg="white"
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                rounded="md"
                p={2}
              >
                <Image m="auto" src={el.image_link} alt="beautyProduct" />
                <Box>
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                    color="black"
                  >
                    {el.name}
                  </Box>
                  <Box>Rating : {el.rating}</Box>
                  <Center color="black">
                    {`Rs.${Math.floor(el.price * 100)}`}
                  </Center>
                  <Center color="green">
                    {`${Math.floor(Math.random() * 100)}% off`}
                  </Center>
                </Box>
                <Button
                  onClick={() => handleAddToCart(el)}
                  style={{
                    backgroundColor: "#fc2779",
                    marginTop: "10px",
                    fontWeight: "bolder",
                    width: "100%",
                    height: "30px",
                    borderRadius: "5px",
                  }}
                >
                  Add To Cart
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
      <Spacer h={100} />
      <Footer />
    </div>
  );
}
export default Products;
