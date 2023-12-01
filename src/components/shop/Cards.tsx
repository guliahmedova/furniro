import { FC } from "react";
import { useEffect } from "react";
import { RootState } from "../../redux/app/store";
import { useAppDispatch } from "../../redux/app/store";
import { ProductTypes } from "../../models/productTypes";
import { ProductCard, Pagination } from "../common/index";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getProducts } from '../../redux/features/productSlice';

interface CardsProps {
    gridClass?: string
};

const Cards: FC<CardsProps> = ({ gridClass }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const products: ProductTypes[] = useSelector((state: RootState) => state.product.entities);

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
                <Pagination />
            </div>
        </section>
    )
};

export default Cards;