import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";
import { useState } from "react";
import { SecondaryHero, Reveal, FeaturesBar } from "../components/common/index";
import FilterModal from "../components/common/FilterModal";

const Shop = () => {
  const [gridClass, setGridClass] = useState('grid');

  return (
    <>
      <Reveal><SecondaryHero title="Shop" /></Reveal>
      <Reveal><Filter changeGridClass={setGridClass} gridClass={gridClass} /></Reveal>
      {/* <FilterModal/> */}
      <Reveal><Cards gridClass={gridClass} /></Reveal>
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Shop