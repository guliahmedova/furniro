import { FC, useEffect, memo } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ProductTypes } from "../../models/productTypes";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getFilteredProducts } from '../../redux/features/shopSlice';
import { Pagination, ProductCard } from "../common/index";
import { Option } from "../../models/OptionType";

interface CardsProps {
    gridClass?: string;
    size?: Option[];
    color?: string[];
    tag?: Option[];
    category?: Option[];
    minPrice?: number
    maxPrice?: number
    show: number
    sortBy?: string
};

const Cards: FC<CardsProps> = ({ gridClass, size, color, tag, category, minPrice, maxPrice, show, sortBy }) => {
    const dispatch = useAppDispatch();
    const currentpage = useSelector((state: RootState) => state.pagination.currentPage);
    const {totalProductCount, filteredProducts} = useSelector((state: RootState) => state.shop);

    useEffect(() => {
        dispatch(getFilteredProducts({
            page: currentpage,
            take: show,
            categoryName: category,
            isNew: null,
            productTags: tag,
            productSizes: size,
            productColors: color,
            maxPrice: maxPrice,
            minPrice: minPrice,
            orderBy: sortBy
        }));
    }, [dispatch, currentpage, size, color, minPrice, maxPrice, sortBy, show, category, tag]);

    return (
        <section className="bg-white">
            <div className="xl:w-[85%] w-[95%] mx-auto mt-[56px] mb-[69px]">
                <div className={`${gridClass === 'grid' ? 'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : 'flex flex-col'} gap-8`}>
                    {filteredProducts?.map((product: ProductTypes) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            gridClass={gridClass}
                        />
                    ))}
                </div>
                <Pagination page={show} total={totalProductCount} />
            </div>
        </section>
    )
};

export default memo(Cards);