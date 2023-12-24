import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';
import filterIcon from '../../assets/images/filter.svg';
import gtidIcon from '../../assets/images/grid.svg';
import viewIcon from '../../assets/images/viewList.svg';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getAllColors, getAllSizes, getColor, getSize } from '../../redux/features/productSlice';
import { Option } from '../../models/OptionType';
const animatedComponents = makeAnimated();

interface FilterProps {
    changeGridClass: (gridType: string) => void;
    gridClass: string
};

const Filter: FC<FilterProps> = ({ changeGridClass, gridClass }) => {
    const dispatch = useAppDispatch();

    const totalProduct = useSelector((state: RootState) => state.product.totalProductCount);
    const [showFiltersMenu, setShowFiltersMenu] = useState(true);
    const [size, setSize] = useState<Option[]>([]);
    const [color, setColor] = useState<Option[]>([]);
    const [tag, setTag] = useState<Option[]>([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [show, setShow] = useState(16);
    const [sortBy, setSortBy] = useState('nameasc');

    const sizes = useSelector((state: RootState) => state.product.sizes);
    const colors = useSelector((state: RootState) => state.product.colors);

    //category names , tags !!!!!!!!!!!

    useEffect(() => {
        dispatch(getAllSizes());
        dispatch(getAllColors());
    }, [dispatch]);

    const sizeOptions = sizes?.map((size) => {
        return { value: size.sizeName, label: size.sizeName };
    });

    const colorOptions = colors?.map((color) => {
        return { value: color.colorHexCode, label: color.colorHexCode }
    });

    const handleChangeSize = (option: readonly Option[], actionMeta: ActionMeta<Option>) => {
        const mutableOption = [...option];
        setSize(mutableOption);
    };

    const handleChangeColor = (option: readonly Option[], actionMeta: ActionMeta<Option>) => {
        const mutableOption = [...option];
        setColor(mutableOption);
    };

    useEffect(() => {
        dispatch(getColor(color));
        dispatch(getSize(size));
    }, [dispatch, color, size]);

    return (
        <section className='bg-[#F9F1E7]'>
            <div className='flex lg:justify-between lg:flex-row px-28 py-7 flex-col w-full'>
                <div className='flex items-center justify-center gap-6 lg:flex-row flex-col-reverse'>
                    <div className='flex items-center gap-2 cursor-pointer' onClick={() => setShowFiltersMenu(!showFiltersMenu)}>
                        <img src={filterIcon} alt="filter-icon" />
                        <span>Filter</span>
                    </div>
                    <div className='flex items-center lg:gap-6 gap-4'>
                        <img src={gtidIcon} alt="grid-icon" onClick={() => changeGridClass('grid')} className={`${gridClass === 'grid' ? 'cursor-default' : 'cursor-pointer'}`} />
                        <img src={viewIcon} alt="view-icon" onClick={() => changeGridClass('view')} className={`${gridClass === 'view' ? 'cursor-default' : 'cursor-pointer'}`} />
                    </div>
                    <span className='select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px] lg:text-base text-sm'>Showing 1–16 of {totalProduct} results</span>
                </div>

                <div className='flex items-center justify-center gap-7 lg:mt-0 mt-6'>
                    <div className='flex items-center lg:gap-4 gap-3'>
                        <span className='lg:text-xl text-sm'>Show</span>
                        <select name="show" value={show} onChange={(e) => setShow(parseInt(e.target.value))} id="showBy" className='w-[55px] h-[55px] text-center appearance-none border-0 text-[#9F9F9F] lg:text-xl outline-0'>
                            <option value="16" defaultChecked>16</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                            <option value="28">28</option>
                        </select>
                    </div>
                    <div className='flex items-center lg:gap-4 gap-3'>
                        <span className='lg:text-xl text-sm'>Sort by</span>
                        <select name="sortBy" id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='lg:w-[188px] h-[55px] px-7 outline-0 appearance-none border-0 text-[#9F9F9F] lg:text-xl'>
                            <option value="nameasc" defaultChecked>nameasc</option>
                            <option value="namedesc">namedesc</option>
                            <option value="priceasc">priceasc</option>
                            <option value="pricedesc">pricedesc</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={`w-[85%] mx-auto py-7 gap-10 flex-wrap ease-linear duration-500 ${showFiltersMenu ? 'flex' : 'hidden'}`}>
                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Category Names</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        options={sizeOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Tags</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        options={sizeOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Sizes</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        onChange={handleChangeSize}
                        options={sizeOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Colors</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        onChange={handleChangeColor}
                        options={colorOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Min price</span>
                    <input type="number" className='p-1.5 outline-none' min={0} value={minPrice} name='minPrice' onChange={e => setMinPrice(parseInt(e.target.value))} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Max price</span>
                    <input type="text" className='p-1.5 outline-none' min={0} value={maxPrice} name='maxPrice' onChange={e => setMaxPrice(parseInt(e.target.value))} />
                </div>
            </div>
        </section>
    )
};

export default Filter;