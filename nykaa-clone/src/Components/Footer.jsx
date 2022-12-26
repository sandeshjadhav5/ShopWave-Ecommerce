import { SimpleGrid, Box, Text, Input, Button, Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
function Footer() {
  return (
    <>
      <SimpleGrid columns={1}>
        <Box bg="#3f414d" height="80px" h={200}>
          <SimpleGrid minChildWidth="300px" mt={10} mb={10} spacing={15}>
            <Box bg="#3f414d" height="120px" p="10">
              <Text color="white">Get special discount on your inbox</Text>
              <Input variant="flushed" w={180} placeholder="Your Email" />
              <Button
                color="white"
                colorScheme="#3f414d"
                border="1px"
                w="15"
                borderColor="white"
                ml={5}
              >
                SEND
              </Button>
            </Box>
            <Box bg="#3f414d" height="120px" p="10">
              <Text color="white">EXPERIENCE THE NYKAA MOBILE APP</Text>
              <Button bg="black" mr={1} w="130px" color="white">
                <Icon mr={1} as={FaGooglePlay} />
                Google Play
              </Button>
              <Button bg="black" w="130px" color="white">
                <Icon mr={1} as={BsApple} />
                Apple Store
              </Button>
            </Box>
            <Box bg="#3f414d" height="120px" p="10">
              <Text color="white">
                FOR ANY HELP, YOU MAY CALL US AT 1800-267-4444
              </Text>
              <Text color="white">
                Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        <SimpleGrid minChildWidth="200px">
          <Box bg="#8c8d94" p={10}>
            <SimpleGrid m="auto" spacing={30} minChildWidth="200px">
              <Box color="white" m="auto">
                <Image
                  w="70px"
                  src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo-700x229.png"
                />
                <Text fontWeight={500}>Who are we?</Text>
                <Text>Careers</Text>
                <Text>Authenticity</Text>
                <Text>Press</Text>
                <Text>Testimonials</Text>
                <Text>Nykaa CSR</Text>
                <Text>Responsible Disclosure</Text>
                <Text>Investor Relations</Text>
              </Box>
              <Box color="white" m="auto">
                <Text fontWeight={500}>Contact Us</Text>
                <Text>Frequently asked questions</Text>
                <Text>Store Locator</Text>
                <Text>Cancellation & Return</Text>
                <Text>Shipping & Delivery</Text>
                <Text>Sell on Nykaa</Text>
              </Box>
              <Box color="white" m="auto">
                <Text fontWeight={500}>Inspire Me</Text>
                <Text>Beauty Book</Text>
                <Text>Nykaa TV</Text>
                <Text>Nykaa Network</Text>
                <Text>Buying Guides</Text>
              </Box>
              <Box color="white" m="auto">
                <Text fontWeight={500}>Quick Links</Text>
                <Text>Offer Zone</Text>
                <Text>New Launches</Text>
                <Text>Nykaa Man</Text>
                <Text>Nykaa Fashion</Text>
                <Text>Nykaa Pro</Text>
                <Text>Nykaa femina beauty awards winners 2019</Text>
                <Text>Sitemap</Text>
              </Box>
              <Box color="white" m="auto">
                <Text fontWeight={500}>Top Categories</Text>
                <Text>Makeup</Text>
                <Text>Offer Zone</Text>
                <Text>New Launches</Text>
                <Text>Nykaa Man</Text>
                <Text>Nykaa Fashion</Text>
                <Text>Nykaa Pro</Text>
                <Text>Nykaa femina beauty</Text>
                <Text>Sitemap</Text>
                <Text>Nykaa Man</Text>
                <Text>Nykaa Fashion</Text>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </SimpleGrid>
    </>
  );
}
export default Footer;
