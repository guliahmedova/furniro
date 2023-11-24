import FavoritesContainer from "../components/favorites/FavoritesContainer";
import SecondaryHero from "../components/common/SecondaryHero";
import Reveal from "../components/common/Reveal";

const Favorites = () => {
  return (
    <>
      <Reveal> <SecondaryHero title="Favorites" /></Reveal>
      <Reveal><FavoritesContainer /></Reveal>
    </>
  )
}

export default Favorites