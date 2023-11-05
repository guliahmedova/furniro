import ProductCard from "../common/ProductCard";
const ProductsContainer = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1236px] mx-auto mt-[56px] mb-[69px]">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center text-[30px] leading-10">Our Products</h1>
                <div className="grid grid-cols-4 gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <button className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6">Show More</button>
            </div>
        </section>
    )
}

export default ProductsContainer;