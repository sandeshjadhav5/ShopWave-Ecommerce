import {Simple,SimpleGrid,Box} from "@chakra-ui/react"

function Footer(){
    return (
        <>
        <SimpleGrid columns={3} spacing={10}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
        </>
    )
}
export default Footer;