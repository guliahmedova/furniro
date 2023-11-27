import { useSelector } from "react-redux";
import { ProductCard } from "../common/index";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { useEffect } from "react";
import { ProductTypes } from "../../models/productTypes";
import { getProducts } from "../../redux/features/productSlice";

const ProductsContainer = () => {
    const dispatch = useAppDispatch();
    const products: ProductTypes[] = useSelector((state: RootState) => state.product.entities) || [];

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // console.log(products);

    return (
        <section className="bg-white">
            <div className="max-w-[1236px] mx-auto mt-[56px] mb-[69px]">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center lg:text-[30px] lg:leading-10 sm:text-2xl text-lg">Our Products</h1>
                <div className="grid lg:grid-cols-4 gap-8 lg:px-0 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3">
                    {products.map((item: ProductTypes) => (
                        <ProductCard
                            key={item.id}
                            product={item} />
                    ))}
                </div>
                <button className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6">Show More</button>
            </div>
        </section>
    )
};

export default ProductsContainer;