
import Slider from "../slider/slider.jsx"
import BestProduct from "./components/BestProduct.jsx"
import Catagories from "./components/Catatories.jsx"
import DealofDay from "./components/DealofDay.jsx"
import HomeCat from "./components/HomeCata.jsx"
import Networking from "./components/Networking.jsx"
import Support from "./components/Support.jsx"
function Home() {
    return (
      <>
      {/* <Discount/> */}
        <Slider/>
        <HomeCat/>
        <Catagories/>
        <Networking/>
        <BestProduct/>
        <Support/>
        <DealofDay/>
      </>
    )
  }
  
  export default Home
  