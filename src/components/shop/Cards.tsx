import { FC, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { ProductTypes } from "../../models/productTypes";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getFilterProducts } from '../../redux/features/productSlice';
import { Pagination, ProductCard } from "../common/index";

interface CardsProps {
    gridClass?: string
};

const Cards: FC<CardsProps> = ({ gridClass }) => {
    const dispatch = useAppDispatch();
    const currentpage = useSelector((state: RootState) => state.pagination.currentPage);
    const products: ProductTypes[] = useSelector((state: RootState) => state.product.paginationProducts);

    const totalProductCount = useSelector((state: RootState) => state.product.totalProductCount);
    const perPage = 16;

    useEffect(() => {
        dispatch(getFilterProducts({
            page: currentpage,
            take: 16,
            categoryName: '',
            isNew: null,
            productTags: '',
            productSizes: '',
            productColors: '',
            maxPrice: 0,
            minPrice: 0,
            orderBy: ''
        }));
    }, [dispatch, currentpage]);

    return (
        <section className="bg-white">
            <div className="xl:w-[85%] w-[95%] mx-auto mt-[56px] mb-[69px]">
                <div className={`${gridClass === 'grid' ? 'grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1' : 'flex flex-col'} gap-8`}>
                    {products.map((product: ProductTypes) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            gridClass={gridClass}
                        />
                    ))}
                </div>
                <Pagination page={perPage} total={totalProductCount} />
            </div>
        </section>
    )
};

export default Cards;