import productRanges from "../../assets/const/productRange";

const ProductRange = () => {
  return (
    <section className="bg-white">
      <div className="xl:w-[85%] w-[95%] mx-auto my-[57px]">

        <div className="text-center">
          <h1 className="text-[#333333] lg:text-[32px] font-bold lg:leading-10 sm:text-2xl text-lg">Browse The Range</h1>
          <p className="text-[#666666] font-normal lg:text-xl lg:leading-7 sm:text-md text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid lg:grid-cols-3 mt-16 gap-5 lg:px-0 sm:grid-cols-2 px-3 grid-cols-1">
            {
              productRanges.map(item => (
                <div key={item.id}>
                  <img src={item.img} alt="product-img" className="w-full rounded-lg"  loading="lazy"/>
                  <span className="mt-[30px] capitalize text-[#333333] font-semibold text-2xl leading-9 text-center w-full block">{item.title}</span>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default ProductRange;  