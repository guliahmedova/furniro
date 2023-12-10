import { useSelector } from "react-redux";
import SearchResult from "../components/search/SearchResult"
import { saveSearchText, searchProducts } from '../redux/features/searchSlice';
import { RootState, useAppDispatch } from "../redux/app/store";
import { ProductTypes } from "../models/productTypes";
import { SecondaryHero, Reveal } from "../components/common/index";
import { useEffect } from "react";

const Search = () => {
    const searchText = useSelector((state: RootState) => state.search.searchText);
    const products: ProductTypes[] = useSelector((state: RootState) => state.search.entities);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchProducts(searchText));
    }, [dispatch, searchText])

    return (
        <>
            <Reveal>
                <SecondaryHero
                    title="Search"
                    isSearch={true}
                    searchText={searchText}
                    saveSearchText={(text) => dispatch(saveSearchText(text))}
                />
            </Reveal>
            <Reveal><SearchResult products={products} searchText={searchText} /></Reveal>
        </>
    )
}

export default Search;