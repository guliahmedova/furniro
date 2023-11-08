import FavoritesContainer from "../components/favorites/FavoritesContainer";
import { lazy, Suspense } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Favorites = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <SecondaryHero title="Favorites" />
      </Suspense>
      <FavoritesContainer />
    </>
  )
}

export default Favorites