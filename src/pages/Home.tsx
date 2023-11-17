import React from "react";
import ProductRange from "../components/home/ProductRange";
import ProductsContainer from "../components/home/ProductsContainer";
import RoomsSlider from "../components/home/RoomsSlider";
import FuniroFurniture from "../components/home/FuniroFurniture";
import TestRoomSlider from "../components/home/SLickRoomSlider";
const LazyPrimaryHero = React.lazy(() => import('../components/home/PrimaryHero'));

const Home = () => {
  return (
    <>
      <React.Suspense fallback="Loading...">
        <LazyPrimaryHero />
      </React.Suspense>
      <ProductRange />
      <ProductsContainer />
      {/* <RoomsSlider /> */}
      <TestRoomSlider/>
      <FuniroFurniture />
    </>
  )
}

export default Home