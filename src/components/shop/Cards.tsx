import { FC, memo } from "react";
import { ProductTypes } from "../../models/productTypes";
import { Pagination, ProductCard } from "../common/index";

interface CardsProps {
    gridClass?: string;
    show: number
    totalProductCount: number,
    filteredProducts: ProductTypes[]
};

const Cards: FC<CardsProps> = ({ gridClass, totalProductCount, filteredProducts, show }) => {

    return (
        <section className="bg-white">
            <div className="xl:w-[85%] w-[95%] mx-auto mt-[56px] mb-[69px]">
                {filteredProducts && filteredProducts.length > 0 ? (
                    <div className={`${gridClass === 'grid' ? 'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : 'flex flex-col'} gap-8`}>
                        {filteredProducts?.map((product: ProductTypes) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                gridClass={gridClass}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-28 flex w-full justify-center items-center flex-col gap-3">
                        <span className="text-red-600 font-bold text-2xl text-center block">No product found.</span>
                    </div>
                )}
                <Pagination page={show} total={totalProductCount} />
            </div>
        </section>
    )
};

export default memo(Cards);