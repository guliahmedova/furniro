import { useEffect, useState } from "react";
import { FeaturesBar, Reveal, SecondaryHero } from "../components/common/index";
import Cards from "../components/shop/Cards";
import Filter from "../components/shop/Filter";
import { Option } from "../models/OptionType";
import { useAppDispatch } from "../redux/app/store";
import { getAllCategories, getAllColors, getAllSizes, getAllTags } from '../redux/features/shopSlice';

const Shop = () => {
  const dispatch = useAppDispatch();

  const [gridClass, setGridClass] = useState('grid');
  const [size, setSize] = useState<Option[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [tag, setTag] = useState<Option[]>([]);
  const [category, setCategory] = useState<Option[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [show, setShow] = useState(8);
  const [sortBy, setSortBy] = useState('');
  const [isNew, setIsNew] = useState('');

  useEffect(() => {
    dispatch(getAllSizes());
    dispatch(getAllColors());
    dispatch(getAllTags());
    dispatch(getAllCategories());
  }, []);

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
          isNew = {isNew}
          setIsNew = {setIsNew}
        /></Reveal>
      <Reveal>
        <Cards
          gridClass={gridClass}
          size={size}
          color={color}
          tag={tag}
          category={category}
          minPrice={minPrice}
          maxPrice={maxPrice}
          show={show}
          isNew = {isNew}
          sortBy={sortBy} />
      </Reveal>
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Shop