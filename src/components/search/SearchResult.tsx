import { ProductCard } from "../common/index";
import { ProductTypes } from "../../models/productTypes";
import { FC } from "react";

interface SearchResultProps {
  products?: ProductTypes[],
  searchText: string
};

const SearchResult: FC<SearchResultProps> = ({ products, searchText }) => {
  return (
    <section>
      <div className="lg:max-w-[1236px] mx-auto mt-[56px] mb-[69px] lg:px-0 px-3">
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
      </div>
    </section>
  )
}

export default SearchResult;