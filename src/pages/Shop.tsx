import FeaturesBar from "../components/common/FeaturesBar";
import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";
import { useState } from "react";
import SecondaryHero from "../components/common/SecondaryHero";
import Reveal from "../components/common/Reveal";

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