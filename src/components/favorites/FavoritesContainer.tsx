import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import favHeart from '../../assets/images/favorite-heart.svg';
import { ProductTypes } from "../../models/productTypes";
import { RootState } from "../../redux/app/store";
import { Pagination, ProductCard } from '../common/index';
import { useMemo } from "react";

const FavoritesContainer = () => {
    const { product } = useSelector((state: RootState) => state.wishlist);
    const perPage = 8;

    // totalCount api-dan gelmelidir
    const totalCount = useMemo(() => {
        return product?.length;
    }, [product]);

    return (
        <section className="bg-white">
            {product.length > 0 ? (<div className="xl:w-[85%] w-[95%] mx-auto mt-[56px] mb-[69px] lg:px-0 px-3">
                <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 w-full">
                    {product.map((item: ProductTypes) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))}
                </div>
                <Pagination page={perPage} total={totalCount} />
            </div>) : (
                <div className="py-28 flex justify-center items-center flex-col gap-3">
                    <img src={favHeart} alt="heart-icon" className="w-10 h-10" />
                    <span className="text-red-600 font-bold text-2xl">Your Wishlist is empty!</span>
                    <p className="font-medium text-gray-600">seems like you don't have wishes here.</p>
                    <p className="font-medium text-gray-600">Make a wish!</p>
                    <Link to="/shop" className="text-white font-medium text-lg bg-[#B88E2F] rounded-sm shadow-md p-3">Start Shopping</Link>
                </div>
            )}
        </section>
    )
}

export default FavoritesContainer