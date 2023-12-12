import { useState } from "react";
import { FeaturesBar, Reveal, SecondaryHero } from "../components/common/index";
import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";

const Shop = () => {
  const [gridClass, setGridClass] = useState('grid');

  return (
    <>
      <Reveal><SecondaryHero title="Shop" /></Reveal>
      <Reveal><Filter changeGridClass={setGridClass} gridClass={gridClass} /></Reveal>
      <Reveal><Cards gridClass={gridClass} /></Reveal>
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Shop