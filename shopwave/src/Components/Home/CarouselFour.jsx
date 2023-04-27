import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

import { Box } from "@chakra-ui/react";
function CarouselFour() {
  return (
    <Carousel style={{ width: "90%", margin: "auto", marginTop: "50px" }}>
      <Carousel.Item>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}
        >
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13926336/2021/8/5/d4b0ede4-57b8-4bd7-8ffb-591c56ea79da1628146040355VishudhWomenBlackSolidOneToeFlats1.jpg"
              alt="First slide"
            />
          </Card>
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/21455270/2023/1/8/c0b13c1f-611d-4432-bc6d-e8bb463b01fc1673130611988RINDASGreyPartyBlockSandals1.jpg"
              alt="First slide"
            />
          </Card>
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/19232364/2022/7/23/fb60ae3d-2489-43a1-9aa8-ecc45fd2f1e51658568099275Heels1.jpg"
              alt="First slide"
            />
          </Card>
        </Stack>
      </Carousel.Item>
      <Carousel.Item>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}
        >
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13926336/2021/8/5/d4b0ede4-57b8-4bd7-8ffb-591c56ea79da1628146040355VishudhWomenBlackSolidOneToeFlats1.jpg"
              alt="First slide"
            />
          </Card>
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15806294/2021/11/30/1a64579c-5f9a-44d8-b5fa-9c9ecbd19d701638272622129TokyoTalkiesWomenWhiteTexturedOpenToeFlats1.jpg"
              alt="First slide"
            />
          </Card>
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/17942832/2022/10/7/e9a8a6d5-43ea-40e8-abe8-4b1c4146b7431665133065418-Shoetopia-Green-and-Purple-Western---Embellished-Block-Mules-1.jpg"
              alt="First slide"
            />
          </Card>
        </Stack>
      </Carousel.Item>
      <Carousel.Item>
        <Stack
          direction="horizontal"
          className="h-100 justify-content-center align-items-center"
          gap={3}
        >
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/1570045/2022/12/28/4fc6a269-38ad-44b1-8074-6f8e0ee760ab1672226245466MarcLoireTanStrappyPlatformWedges1.jpg"
              alt="First slide"
            />
          </Card>
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13926336/2021/8/5/d4b0ede4-57b8-4bd7-8ffb-591c56ea79da1628146040355VishudhWomenBlackSolidOneToeFlats1.jpg"
              alt="First slide"
            />
          </Card>
          <Card>
            {" "}
            <img
              className="d-block w-100"
              src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13926336/2021/8/5/d4b0ede4-57b8-4bd7-8ffb-591c56ea79da1628146040355VishudhWomenBlackSolidOneToeFlats1.jpg"
              alt="First slide"
            />
          </Card>
        </Stack>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFour;

// {/* <img
//           className="d-block w-100"
//           src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13926336/2021/8/5/d4b0ede4-57b8-4bd7-8ffb-591c56ea79da1628146040355VishudhWomenBlackSolidOneToeFlats1.jpghttps://images-static.nykaa.com/uploads/f9cfaae2-c9b4-49ac-a41e-e87d4ad46d62.jpg?tr=w-200,cm-pad_resize"
//           alt="Second slide"
//         /> */}
