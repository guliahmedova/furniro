import Pagination from "../common/Pagination";
import ProductCard from "../common/ProductCard";

const FavoritesContainer = () => {
    return (
        <section className="bg-white">
            <div className="max-w-[1236px] mx-auto mt-[56px] mb-[69px]">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center text-[30px] leading-10">Your Favorite Products</h1>
                <div className="grid grid-cols-4 gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <Pagination />
            </div>
        </section>
    )
}

export default FavoritesContainer