// import ProductCard from "../common/ProductCard"

const SearchResult = () => {
  return (
    <section>
      <div className="lg:max-w-[1236px] mx-auto mt-[56px] mb-[69px] lg:px-0 px-3">
        <p className="font-medium text-gray-400 lg:text-left capitalize lg:text-2xl text-xl text-center">
          <span className="underline italic">"Query"</span> açar sözü üzrə axtarış nəticələri...
        </p>
        <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8">
          {/* <ProductCard/> */}
        </div>
      </div>
    </section>
  )
}

export default SearchResult;