import { useSelector } from "react-redux";
import SearchResult from "../components/search/SearchResult"
import { lazy, Suspense, useEffect } from "react";
import { RootState, useAppDispatch } from "../redux/app/store";
import { addSearchText } from "../redux/features/searchSlice";
import { getProducts } from "../redux/features/productSlice";
import { ProductTypes } from "../models/productTypes";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Search = () => {
    const searchText = useSelector((state: RootState) => state.search.searchText);
    const products: ProductTypes[] = useSelector((state: RootState) => state.product.entities);
    const dispatch = useAppDispatch();

    // const filteredProducts = products.filter((product) => product?.ProductTags?.map((tag: string) => tag?.toLowerCase().startsWith(searchText.toLocaleLowerCase())));
    const filteredProducts = products.filter((product) => product.Title.toLowerCase().startsWith(searchText.toLocaleLowerCase()));

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <>
            <Suspense fallback="Loading...">
                <SecondaryHero title="Search"
                    isSearch={true}
                    searchText={searchText}
                    addSearchText={(text) => dispatch(addSearchText(text))} />
            </Suspense>
            <SearchResult products={filteredProducts} searchText={searchText} />
        </>
    )
}

export default Search;