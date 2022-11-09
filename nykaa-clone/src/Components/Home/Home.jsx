import { Spacer, Image, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import CarouselOne from "./CarouselOne";
import CarouselTwo from "./CarouselTwo";
function Home() {
  return (
    <>
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
        <CarouselTwo />
      </div>
      <div style={{ backgroundColor: "#f3f3f3" }}>
        <Image
          m="auto"
          w="90%"
          p="10"
          src="https://images-static.nykaa.com/uploads/a47a4ec4-140c-4035-8b85-629db661a638.jpg?tr=w-1200,cm-pad_resize"
        />
        <Heading
          textAlign="center"
          fontSize="30"
          fontWeight="15"
          color="#90414d"
        >
          TOP BRANDS
        </Heading>
        <SimpleGrid w="85%" m="auto" mt="5" columns={2} spacing={5}>
          <Box height="320">
            <Image src="https://images-static.nykaa.com/uploads/fe1628ec-9c9c-445a-8a8d-29a2517570a9.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320">
            <Image src="https://images-static.nykaa.com/uploads/ca81f059-d8ce-4ecf-ae4c-d5421925ac71.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320">
            <Image src="https://images-static.nykaa.com/uploads/7ec23965-8ab3-4315-b56f-cc8b61557080.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320">
            <Image src="https://images-static.nykaa.com/uploads/b140ddef-98b9-4bd6-a4ff-9769c476a8b7.jpg?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320">
            <Image src="https://images-static.nykaa.com/uploads/03c9f4e8-6462-40a2-b1f6-fd97e1c9a950.gif?tr=w-600,cm-pad_resize" />
          </Box>
          <Box height="320">
            <Image src="https://images-static.nykaa.com/uploads/09c8b563-39ef-45e7-b286-ffd014da6652.jpg?tr=w-600,cm-pad_resize" />
          </Box>
        </SimpleGrid>
        <Box  height="320" m="auto" mt="5">
          <Image height="320"  m="auto" src="https://images-static.nykaa.com/uploads/09c8b563-39ef-45e7-b286-ffd014da6652.jpg?tr=w-600,cm-pad_resize" />
        </Box>
      </div>
    </>
  );
}

export default Home;
