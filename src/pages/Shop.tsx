import FeaturesBar from "../components/common/FeaturesBar";
import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";
import { lazy, Suspense } from "react";
import { useState } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Shop = () => {
  const [gridClass, setGridClass] = useState('grid');

  return (
    <>
      <Suspense fallback="Loading...">
        <SecondaryHero title="Shop" />
      </Suspense>
      <Filter changeGridClass = {setGridClass} gridClass={gridClass} />
      <Cards gridClass = {gridClass} />
      <FeaturesBar />
    </>
  )
}

export default Shop