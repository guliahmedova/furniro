import SearchResult from "../components/search/SearchResult"
import { lazy, Suspense } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Search = () => {
    return (
        <>
            <Suspense fallback="Loading...">
                <SecondaryHero title="Search" isSearch={true} />
            </Suspense>
            <SearchResult />
        </>
    )
}

export default Search;