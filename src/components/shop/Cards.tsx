import Pagination from "../common/Pagination";
import ProductCard from "../common/ProductCard";

const Cards = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1236px] mx-auto mt-[56px] mb-[69px] lg:px-0 px-3">
                <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

                <Pagination/>
            </div>
        </section>
    )
}

export default Cards