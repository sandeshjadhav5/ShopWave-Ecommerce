import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card'

import {Box} from "@chakra-ui/react"
function CarouselFour() {
  return (
    <Carousel style={{ width: '90%',margin:"auto",marginTop:"50px" }}>
      <Carousel.Item>
      
         <Stack
    direction="horizontal"
    className="h-100 justify-content-center align-items-center"
    gap={3}
  >
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/1d0aa0ae-4872-4073-beff-d905790ff99e.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/6c775ddc-8656-4382-a0ce-7d4c50eaeb71.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/2f2546bc-edc9-4ad3-9849-e981ade07eb8.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
  </Stack>
      </Carousel.Item>
      <Carousel.Item>
      <Stack
    direction="horizontal"
    className="h-100 justify-content-center align-items-center"
    gap={3}
  >
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/1d0aa0ae-4872-4073-beff-d905790ff99e.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/6c775ddc-8656-4382-a0ce-7d4c50eaeb71.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/2f2546bc-edc9-4ad3-9849-e981ade07eb8.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
  </Stack>
      </Carousel.Item>
      <Carousel.Item>
      <Stack
    direction="horizontal"
    className="h-100 justify-content-center align-items-center"
    gap={3}
  >
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/1d0aa0ae-4872-4073-beff-d905790ff99e.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/6c775ddc-8656-4382-a0ce-7d4c50eaeb71.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
    <Card> <img
className="d-block w-100"
src="https://images-static.nykaa.com/uploads/2f2546bc-edc9-4ad3-9849-e981ade07eb8.jpg?tr=w-1200,cm-pad_resize"
alt="First slide"
/></Card>
  </Stack>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFour;


// {/* <img
//           className="d-block w-100"
//           src="https://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-200,cm-pad_resize"
//           alt="Second slide"
//         /> */}