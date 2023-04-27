import Carousel from "react-bootstrap/Carousel";

function CarouselThree() {
  return (
    <Carousel style={{ width: "90%", margin: "auto", marginTop: "50px" }}>
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
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselThree;
