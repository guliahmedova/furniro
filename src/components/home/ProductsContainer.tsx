import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductTypes } from "../../models/productTypes";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getProducts } from "../../redux/features/productSlice";
import { ProductCard } from "../common/index";

const ProductsContainer = () => {
    const dispatch = useAppDispatch();
    const { totalProductCount, products } = useSelector((state: RootState) => state.product);
    const [showMore, setShowMore] = useState(8);

    useEffect(() => {
        dispatch(getProducts(showMore));
    }, [dispatch, showMore]);

    const handleShowMoreClick = () => {
        if (totalProductCount > showMore) {
            setShowMore(prevState => prevState + 8);
        }
    };

    return (
        <section className="bg-white">
            <div className="xl:w-[85%] w-[90%] mx-auto mt-[56px] mb-[69px]">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center lg:text-[30px] lg:leading-10 sm:text-2xl text-lg">Our Products</h1>
                <div className="grid lg:grid-cols-4 gap-8 lg:px-0 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3">
                    {products?.map((item: ProductTypes) => (
                        <ProductCard
                            key={item.id}
                            product={item} />
                    ))}
                </div>
                {(totalProductCount !== showMore && showMore > 4) && (
                    <button
                        className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6"
                        onClick={handleShowMoreClick}>
                        Show More
                    </button>
                )}
            </div>
        </section>
    )
};

export default ProductsContainer;