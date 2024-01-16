import { useEffect, useState } from "react";
import { FeaturesBar, Reveal, SecondaryHero } from "../components/common/index";
import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";
import { Option } from "../models/OptionType";
import { RootState, useAppDispatch } from "../redux/app/store";
import { getAllCategories, getAllColors, getAllSizes, getAllTags, getFilteredProducts } from '../redux/features/shopSlice';
import { useSelector } from "react-redux";

const Shop = () => {
  const dispatch = useAppDispatch();
  const currentpage = useSelector((state: RootState) => state.pagination.currentPage);
  const { totalProductCount, filteredProducts } = useSelector((state: RootState) => state.shop);

  const [gridClass, setGridClass] = useState('grid');
  const [size, setSize] = useState<Option[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [tag, setTag] = useState<Option[]>([]);
  const [category, setCategory] = useState<Option[]>([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [show, setShow] = useState(8);
  const [sortBy, setSortBy] = useState('');
  const [isNew, setIsNew] = useState('');

  useEffect(() => {
    dispatch(getAllSizes());
    dispatch(getAllColors());
    dispatch(getAllTags());
    dispatch(getAllCategories());
  }, []);

  useEffect(() => {
    dispatch(getFilteredProducts({
      page: currentpage,
      take: show,
      categoryName: category,
      isNew: isNew,
      productTags: tag,
      productSizes: size,
      productColors: color,
      maxPrice: maxPrice,
      minPrice: minPrice,
      orderBy: sortBy,
    }));
  }, [dispatch, currentpage, size, color, minPrice, maxPrice, sortBy, show, category, tag, isNew]);

  return (
    <>
      <Reveal><SecondaryHero title="Shop" /></Reveal>
      <Reveal>
        <Filter
          changeGridClass={setGridClass}
          gridClass={gridClass}
          setSize={setSize}
          setColor={setColor}
          setTag={setTag}
          setCategory={setCategory}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          setShow={setShow}
          setSortBy={setSortBy}
          minPrice={minPrice}
          maxPrice={maxPrice}
          show={show}
          sortBy={sortBy}
          isNew={isNew}
          totalProductCount={totalProductCount}
          setIsNew={setIsNew}
        /></Reveal>
      <Reveal>
        <Cards
          gridClass={gridClass}
          show={show}
          totalProductCount={totalProductCount}
          filteredProducts={filteredProducts}
        />
      </Reveal>
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Shop