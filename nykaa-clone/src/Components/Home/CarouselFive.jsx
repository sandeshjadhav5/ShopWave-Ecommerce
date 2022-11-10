import Carousel from 'react-bootstrap/Carousel';

function CarouselFive() {
  return (
    <Carousel style={{ width: '80%',margin:"auto",marginTop:"50px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/93889767-e36a-427c-a2d6-dc20119d6262.jpg?tr=w-1200,cm-pad_resize"
          alt="First slide"
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-static.nykaa.com/uploads/101ccea5-08c4-4ea7-86b3-dd4fcaf6c9a3.jpg?tr=w-1200,cm-pad_resize"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFive;