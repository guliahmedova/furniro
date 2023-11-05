import FuniroFurniture from "../components/home/FuniroFurniture"
import PrimaryHero from "../components/home/PrimaryHero"
import ProductRange from "../components/home/ProductRange"
import ProductsContainer from "../components/home/ProductsContainer"
import RoomsSlider from "../components/home/RoomsSlider"

const Home = () => {
  return (
    <>
      <PrimaryHero />
      <ProductRange />
      <ProductsContainer />
      <RoomsSlider/>
      <FuniroFurniture/>
    </>
  )
}

export default Home