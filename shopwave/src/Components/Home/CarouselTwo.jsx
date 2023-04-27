import Carousel from "react-bootstrap/Carousel";
import { Icon } from "@chakra-ui/icons";
function CarouselTwo() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/4/10/38f37101-f335-44be-af8f-5d53de15c75e1649530843725-Casual---Sports-Shoes_Desk--1-.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/a20271c6-249f-480b-bcc7-1b150516e54e1651599573998-Dressberry_Desk.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTwo;
