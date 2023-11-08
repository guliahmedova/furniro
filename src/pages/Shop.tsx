import FeaturesBar from "../components/common/FeaturesBar";
import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";
import { lazy, Suspense } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Shop = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <SecondaryHero title="Shop" />
      </Suspense>
      <Filter />
      <Cards />
      <FeaturesBar />
    </>
  )
}

export default Shop