import Carousel from 'react-bootstrap/Carousel';

function CarouselThree() {
  return (
    <Carousel style={{ width: '90%',margin:"auto",marginTop:"50px" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/67ab467e-3ee0-4507-8be0-e1833c30ccac.jpg?tr=w-1200,cm-pad_resize"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/5b47c37e-e0fe-47d7-9c60-f719ff6e75d3.jpg?tr=w-1200,cm-pad_resize"
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselThree;