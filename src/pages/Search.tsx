import { useSelector } from "react-redux";
import SearchResult from "../components/search/SearchResult"
import { useEffect } from "react";
import { RootState, useAppDispatch } from "../redux/app/store";
import { addSearchText } from "../redux/features/searchSlice";
import { getProducts } from "../redux/features/productSlice";
import { ProductTypes } from "../models/productTypes";
import SecondaryHero from "../components/common/SecondaryHero";
import Reveal from "../components/common/Reveal";

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
            <Reveal><SecondaryHero title="Search"
                isSearch={true}
                searchText={searchText}
                addSearchText={(text) => dispatch(addSearchText(text))} />
            </Reveal>
            <Reveal><SearchResult products={filteredProducts} searchText={searchText} /></Reveal>
        </>
    )
}

export default Search;