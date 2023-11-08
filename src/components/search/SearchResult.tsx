import ProductCard from "../common/ProductCard"

const SearchResult = () => {
  return (
    <section>
      <div className="max-w-[1236px] mx-auto mt-[56px] mb-[69px]">
        <p className="font-medium text-gray-400 capitalize text-2xl">
          <span className="underline italic">"Query"</span> açar sözü üzrə axtarış nəticələri...
        </p>
        <div className="flex justify-between mt-8">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </section>
  )
}

export default SearchResult