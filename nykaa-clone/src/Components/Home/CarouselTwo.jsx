import Carousel from 'react-bootstrap/Carousel';
import { Icon } from '@chakra-ui/icons';
function CarouselTwo() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/d429a036-4015-4d9c-8f78-49880e84f80f.jpg?tr=w-1200,cm-pad_resize"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/97dafb2f-f8ab-4824-825a-256458b7eed2.jpg?tr=w-1200,cm-pad_resize"
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselTwo;