import Pagination from "../common/Pagination";
import ProductCard from "../common/ProductCard";

const Cards = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1236px] mx-auto mt-[56px] mb-[69px]">
                <div className="grid grid-cols-4 gap-8">
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