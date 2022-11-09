import { Spacer ,Image} from "@chakra-ui/react";
import CarouselOne from "./CarouselOne"
import CarouselTwo from "./CarouselTwo";
function Home (){
  return(
    <>
    <CarouselOne />
    <Spacer h="50px"/>
    <div style={{width:"90%",margin:"auto",padding:"15px",backgroundColor:"#f3f3f3"}}>
<CarouselTwo/>
    </div>
    <Image />
    
    </>
  )
}

export default Home;