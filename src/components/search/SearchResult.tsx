import { ProductCard } from "../common/index";
import { ProductTypes } from "../../models/productTypes";
import { FC } from "react";

interface SearchResultProps {
  products?: ProductTypes[],
  searchText: string,
  handleShowMoreClick: () => void,
  showMore: number,
  totalCount: number
};

const SearchResult: FC<SearchResultProps> = ({ products, searchText, handleShowMoreClick, totalCount, showMore }) => {
  return (
    <section>
      <div className="xl:w-[85%] w-[95%] mx-auto mt-[56px] mb-[69px] lg:px-0 px-3">
        {searchText && (
          <div className="font-medium text-gray-400 lg:text-left capitalize lg:text-2xl text-xl text-center">
            <span className="underline italic">{searchText}</span> açar sözü üzrə axtarış nəticələri...
          </div>
        )}
        <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8">
          {products?.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
        {(totalCount !== showMore && totalCount > 4) && (
          <button onClick={handleShowMoreClick} className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6">Show More</button>
        )}
      </div>
    </section>
  )
}

export default SearchResult;