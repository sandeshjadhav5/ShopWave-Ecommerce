import axios from "axios";
import Navbar from "../Navbar";
import {
  Spacer,
  Image,
  Heading,
  SimpleGrid,
  Box,
  Badge,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import CarouselOne from "./CarouselOne";
import CarouselTwo from "./CarouselTwo";
import CarouselThree from "./CarouselThree";
import CarouselFour from "./CarouselFour";
import CarouselFive from "./CarouselFive";
import { Link } from "react-router-dom";
import Footer from "../Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Spacer h={{ lg: 100, md: 50 }} />

      <Link to="/products">
        <CarouselOne />
      </Link>
      <Spacer h="50px" />

      <div
        style={{
          width: "90%",
          margin: "auto",
          padding: "15px",
          backgroundColor: "#f3f3f3",
        }}
      >
        <Link to="/products">
          <CarouselTwo />
        </Link>
      </div>

      <div style={{ backgroundColor: "#f3f3f3" }}>
        <Image
          m="auto"
          w="90%"
          h="300px"
          p="10"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3f6d1e2a-5ef6-4921-be5d-443a11b11d801651599573985-Dresses_Desk.jpg"
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
        <Link to="/products">
          <SimpleGrid
            w="80%"
            minChildWidth="250px"
            m="auto"
            mt="15"
            spacing={10}
          >
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/90f48b14-9947-4637-8f92-75e13dbc3a6f1645784458462-SS22-ShopByOccassion-HappyHours-1-.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/d99b81d4-a71f-406e-9a54-5b14d2800d6d1645784458375-SS22-ShopByOccassion-BackToOffice.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg" />
            </Box>
            <Box boxShadow="dark-lg" bg="white">
              <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/407be362-f208-4d84-a723-f30045e4a6151645784458357-SS22-ShopByOccassion-BackToOffice-1-.jpg" />
            </Box>
          </SimpleGrid>
        </Link>
        <CarouselThree />
        <SimpleGrid w="80%" m="auto" mt="15" minChildWidth="250px" spacing={10}>
          <Box boxShadow="dark-lg" bg="white">
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg" />
          </Box>
          <Box boxShadow="dark-lg" bg="white">
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg" />
          </Box>
          <Box boxShadow="dark-lg" bg="white">
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg" />
          </Box>
          <Box boxShadow="dark-lg" bg="white">
            <Image src="https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/4ff811f4-1ece-46dc-baf4-3454c9dc41831645784458532-SS22-ShopByOccassion-PilatesClass-1-.jpg" />
          </Box>
        </SimpleGrid>
        <Heading
          textAlign="center"
          fontWeight="20"
          color="#4d464d"
          mt={45}
          mb={5}
        >
          ONLY AT SHOPWAVE
        </Heading>
        <Link to="/products">
          <Box w="95%" m="auto" pb={5} bg="#fbe2e8">
            <SimpleGrid m="auto" columns={7} spacing={5}>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
              <Box>
                <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17550472/2022/3/16/492ff4cf-fdda-4e30-9fb8-ec4b4b97e8cc1647429425993BibaWomenWhiteEthnicMotifsPanelledPureCottonKurtawithSalwarW1.jpg" />
              </Box>
            </SimpleGrid>
          </Box>
        </Link>
        <Heading
          textAlign="center"
          fontWeight="20"
          color="black"
          mt={45}
          mb={5}
        >
          BESTSELLERS
        </Heading>
        <SimpleGrid w="95%" m="auto" minChildWidth="100px" spacing={10}>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946924/2021/4/5/f1dbe69c-1bfe-448b-b5b7-f71c18cd5a3d1617617059340-Biba-Women-Off-White--Navy-Blue-Checked-Kurta-with-Palazzos--1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20249324/2022/10/3/a700c7d8-9e45-46ca-aef6-bc7bb1e5b3a01664779790969KurtaSets1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18911846/2022/6/30/a156d28a-aa20-4167-ade3-313f262546211656577806609BibaWomenBurgundyEthnicMotifsPrintedKurtiwithPalazzosWithDup1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18712956/2022/6/13/8199d303-1084-4ad8-9f3f-246461c305d01655095444988KurtaSets1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18712956/2022/6/13/8199d303-1084-4ad8-9f3f-246461c305d01655095444988KurtaSets1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18712956/2022/6/13/8199d303-1084-4ad8-9f3f-246461c305d01655095444988KurtaSets1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            rounded="md"
            bg="white"
            p={2}
          >
            <Badge borderRadius="half" px="2" colorScheme="blue">
              BESTSELLER
            </Badge>
            <Image
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18712956/2022/6/13/8199d303-1084-4ad8-9f3f-246461c305d01655095444988KurtaSets1.jpg"
              alt="beautyProduct"
            />

            <Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
              >
                L'Oreal Paris Revitalift 1.5% Hyaluronic Acid Serum
              </Box>
              <Box>2 Sizes</Box>
              <Box display="flex" mt="2" alignItems="center">
                {" "}
                ₹699
                <Box as="span" ml="2" color="gray.400" fontSize="sm">
                  ̶ ̶₹̶8̶9̶9̶
                </Box>
                <Box ml="2" color="green.400" fontSize="sm">
                  15%
                </Box>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
        <Heading
          textAlign="center"
          fontWeight="20"
          color="#4d464d"
          mt={45}
          mb={5}
        >
          FEATURED BRANDS
        </Heading>
        <SimpleGrid minChildWidth="100px" m="auto" w="95%" spacing={10}>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946902/2021/4/3/7b46925a-0692-40df-a28a-839eafb804651617434141923LehengaCholiSHUBHKALAWomenLehengaCholiSHUBHKALAWomenLehengaC5.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946902/2021/4/3/7b46925a-0692-40df-a28a-839eafb804651617434141923LehengaCholiSHUBHKALAWomenLehengaCholiSHUBHKALAWomenLehengaC5.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946902/2021/4/3/7b46925a-0692-40df-a28a-839eafb804651617434141923LehengaCholiSHUBHKALAWomenLehengaCholiSHUBHKALAWomenLehengaC5.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946902/2021/4/3/7b46925a-0692-40df-a28a-839eafb804651617434141923LehengaCholiSHUBHKALAWomenLehengaCholiSHUBHKALAWomenLehengaC5.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946902/2021/4/3/7b46925a-0692-40df-a28a-839eafb804651617434141923LehengaCholiSHUBHKALAWomenLehengaCholiSHUBHKALAWomenLehengaC5.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13946902/2021/4/3/7b46925a-0692-40df-a28a-839eafb804651617434141923LehengaCholiSHUBHKALAWomenLehengaCholiSHUBHKALAWomenLehengaC5.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3f125d86-5139-4ee2-8561-5a610c2624421598892519314-Only.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth="150px" m="auto" w="39%" mt={10} spacing={10}>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/3f125d86-5139-4ee2-8561-5a610c2624421598892519314-Only.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg" />
            <Text color="#fc4086" textAlign="center">
              Upto 20% Off + Select Your Free Serum{" "}
            </Text>
            <Text textAlign="center">Worth Rs. 799 On Rs. 999</Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid minChildWidth="250px" m="auto" w="80%" mt={10} spacing={10}>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15321114/2021/9/9/c340b549-9f51-4c5b-8efe-3b3fe7ae2f731631204557472-HERENOW-Women-Beige--Brown-Solid-Slip-On-4931631204557346-6.jpg" />
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19633098/2022/8/24/ed915373-7714-4137-a32b-a35894f845f21661338343755Heels7.jpg" />
          </Box>
          <Box boxShadow="md" rounded="md" bg="white">
            <Image src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13203266/2021/2/17/c51da1a0-4b7c-43bb-871b-f3cd5d36b4db1613525194710VishudhWomenBlackSolidBlockHeels1.jpg" />
          </Box>
        </SimpleGrid>

        <SimpleGrid
          boxShadow="md"
          rounded="md"
          bg="white"
          backgroundImage="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg"
          h={300}
          minChildWidth="250px"
          m="auto"
          w="80%"
          mt={10}
          spacing={10}
        >
          <Box></Box>
          <Box>
            <CarouselFour />
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
          CATEGORY IN FOCUS
        </Heading>
        <CarouselFive />
      </div>
      <Spacer h={100} />
      <Footer />
    </>
  );
}

export default Home;
