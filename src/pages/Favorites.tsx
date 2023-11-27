import FavoritesContainer from "../components/favorites/FavoritesContainer";
import { SecondaryHero, Reveal } from "../components/common/index";

const Favorites = () => {
  return (
    <>
      <Reveal> <SecondaryHero title="Favorites" /></Reveal>
      <Reveal><FavoritesContainer /></Reveal>
    </>
  )
}

export default Favorites