import productRanges from "../../assets/const/productRange";

const ProductRange = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1236px] mx-auto my-[57px]">

        <div className="text-center">
          <h1 className="text-[#333333] text-[32px] font-bold leading-10">Browse The Range</h1>
          <p className="text-[#666666] font-normal text-xl leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="grid grid-cols-3 mt-16 gap-5">
            {
              productRanges.map(item => (
                <div key={item.id}>
                  <img src={item.img} alt="" className="w-full rounded-lg"  loading="lazy"/>
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