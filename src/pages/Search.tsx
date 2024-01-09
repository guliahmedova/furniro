import { useSelector } from "react-redux";
import SearchResult from "../components/search/SearchResult"
import { saveSearchText, searchProducts } from '../redux/features/searchSlice';
import { RootState, useAppDispatch } from "../redux/app/store";
import { ProductTypes } from "../models/productTypes";
import { SecondaryHero, Reveal } from "../components/common/index";
import { useEffect, useState } from "react";

const Search = () => {
    const searchText = useSelector((state: RootState) => state.search.searchText);
    const products: ProductTypes[] = useSelector((state: RootState) => state.search.entities);
    const totalCount = useSelector((state: RootState) => state.search.totalCount);
    const [showMore, setShowMore] = useState(8);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(searchProducts({ prompt: searchText, take: showMore }));
    }, [dispatch, searchText]);

    const handleShowMoreClick = () => {
        if (totalCount > showMore) {
            setShowMore(prevState => prevState + 8);
        }
    };

    return (
        <>
            <Reveal>
                <SecondaryHero
                    title="Search"
                    isSearch={true}
                    searchText={searchText}
                    saveSearchText={(text:string) => dispatch(saveSearchText(text))}
                />
            </Reveal>
            <Reveal><SearchResult
                products={products}
                searchText={searchText}
                handleShowMoreClick={handleShowMoreClick}
                totalCount = {totalCount}
                showMore = {showMore}
                /></Reveal>
        </>
    )
}

export default Search;