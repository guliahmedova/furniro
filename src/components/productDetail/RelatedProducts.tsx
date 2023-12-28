import ProductCard from "../common/ProductCard";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { useEffect, useState } from "react";
import { getRelatedProducts } from "../../redux/features/productDetailSlice";
import { ProductTypes } from "../../models/productTypes";
import { useParams } from "react-router-dom";

const RelatedProducts = () => {
    const dispatch = useAppDispatch();
    const [showMore, setShowMore] = useState(4);
    
    const totalProductCount = useSelector((state: RootState) => state.product.totalProductCount);
    const relatedProducts = useSelector((state: RootState) => state.productDetail.relatedProducts);

    const { productId } = useParams();

    useEffect(() => {
        if (productId) {
            dispatch(getRelatedProducts({ productId: productId, take: showMore }));
        }
    }, [dispatch, productId]);

    const handleShowMoreClick = () => {
        if (totalProductCount > showMore) {
            setShowMore(prevState => prevState + 4);
        }
    };

    return (
        <section className="bg-white">
            <div className="lg:max-w-[1236px] mx-auto mt-[56px] mb-[69px]">
                <h1 className="font-bold text-[#3A3A3A] mb-[32px] text-center lg:text-[30px] text-xl leading-10">Related Products</h1>
                <div className="grid lg:grid-cols-4 gap-8 lg:px-0 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-3">
                    {relatedProducts?.map((item: ProductTypes) => (
                        <ProductCard
                            key={item.id}
                            product={item} />
                    ))}
                </div>
                {(totalProductCount !== showMore && showMore > 4) && (
                    <button onClick={handleShowMoreClick} className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6">Show More</button>
                )}
            </div>
        </section>
    )
}

export default RelatedProducts;