import React from "react";
import ProductRange from "../components/home/ProductRange";
import ProductsContainer from "../components/home/ProductsContainer";
// import RoomsSlider from "../components/home/RoomsSlider";
import FuniroFurniture from "../components/home/FuniroFurniture";
import TestRoomSlider from "../components/home/SLickRoomSlider";
const LazyPrimaryHero = React.lazy(() => import('../components/home/PrimaryHero'));
import Reveal from "../components/common/Reveal";

const Home = () => {
  return (
    <>
      <React.Suspense fallback="Loading...">
        <LazyPrimaryHero />
      </React.Suspense>
      <Reveal><ProductRange /></Reveal>
      <Reveal><ProductsContainer /></Reveal>
      {/* <RoomsSlider /> */}
      <TestRoomSlider />
      <Reveal><FuniroFurniture /></Reveal>
    </>
  )
}

export default Home