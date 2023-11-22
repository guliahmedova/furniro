import Pagination from "../common/Pagination";
import ProductCard from "../common/ProductCard";
import { useSelector } from "react-redux";
import { ProductTypes } from "../../models/productTypes";
import { RootState } from "../../redux/app/store";

const FavoritesContainer = () => {
    const favProducts = useSelector((state: RootState) => state.wishlist.product);

    return (
        <section className="bg-white">
            {favProducts.length > 0 ? (<div className="lg:max-w-[1236px] mx-auto mt-[56px] mb-[69px] lg:px-0 px-3">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center lg:text-[30px] text-xl lg:leading-10">Your Favorite Products</h1>
                <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8">
                    {favProducts.map((item: ProductTypes) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))}
                </div>
                <Pagination />
            </div>) : (<div className="text-center py-28 text-7xl font-medium text-yellow-800">There are no products</div>)}
        </section>
    )
}

export default FavoritesContainer