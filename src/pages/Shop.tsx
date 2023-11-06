import FeaturesBar from "../components/common/FeaturesBar"
import SecondaryHero from "../components/common/SecondaryHero"
import Cards from "../components/shop/Cards"
import Filter from "../components/shop/Filter"

const Shop = () => {
  return (
    <>
      <SecondaryHero title="Shop"/>
      <Filter/>
      <Cards/>
      <FeaturesBar/>
    </>
  )
}

export default Shop