import { FC, memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import Select, { ActionMeta } from 'react-select';
import makeAnimated from 'react-select/animated';
import filterIcon from '../../assets/images/filter.svg';
import gtidIcon from '../../assets/images/grid.svg';
import viewIcon from '../../assets/images/viewList.svg';
import { Option } from '../../models/OptionType';
import { RootState } from '../../redux/app/store';
const animatedComponents = makeAnimated();

interface FilterProps {
    changeGridClass: (gridType: string) => void;
    setSize?: React.Dispatch<React.SetStateAction<Option[]>> | undefined;
    setColor?: React.Dispatch<React.SetStateAction<string[]>> | undefined;
    setTag?: React.Dispatch<React.SetStateAction<Option[]>> | undefined;
    setCategory?: React.Dispatch<React.SetStateAction<Option[]>> | undefined;
    setMinPrice?: React.Dispatch<React.SetStateAction<string>> | undefined;
    setMaxPrice?: React.Dispatch<React.SetStateAction<string>> | undefined;
    setShow?: React.Dispatch<React.SetStateAction<number>> | undefined;
    setSortBy?: React.Dispatch<React.SetStateAction<string>> | undefined;
    setIsNew?: React.Dispatch<React.SetStateAction<string>> | undefined;
    gridClass: string,
    minPrice?: string;
    maxPrice?: string;
    isNew: string;
    show?: number;
    sortBy?: string;
    totalProductCount: number
};

const Filter: FC<FilterProps> = ({ changeGridClass, gridClass, setSize, setColor, setTag, setCategory, setMaxPrice, setMinPrice, setShow, setSortBy, setIsNew, minPrice, maxPrice, show, sortBy, isNew, totalProductCount }) => {
    const [showFiltersMenu, setShowFiltersMenu] = useState(false);
    const { sizes, colors, tags, categories } = useSelector((state: RootState) => state.shop);

    const sizeOptions = useMemo(() => {
        return sizes?.map((size) => ({
            value: size.sizeName,
            label: size.sizeName
        }));
    }, [sizes]);

    const colorOptions = useMemo(() => {
        return colors?.map((color) => ({
            value: color.colorHexCode,
            label: (
                <span
                    style={{ backgroundColor: `${color.colorHexCode}` }}
                    className='w-auto block h-6 rounded-full shadow-2xl px-5'
                ></span>
            )
        }));
    }, [colors]);

    const tagOptions = useMemo(() => {
        return tags?.map((tag) => ({
            value: tag.tagName,
            label: tag.tagName
        }));
    }, [tags]);

    const categoriesOptions = useMemo(() => {
        return categories?.map((category) => ({
            value: category.categoryName,
            label: category.categoryName
        }));
    }, [categories]);

    const handleChangeSize = useCallback((option: readonly Option[], _actionMeta: ActionMeta<Option>) => {
        const mutableOption = [...option];
        if (setSize) {
            setSize(mutableOption);
        };
    }, []);

    const handleChangeColor = useCallback((option: readonly Option[], _actionMeta: ActionMeta<Option>) => {
        const mutableOption = [...option];
        const colorValues = mutableOption.map((item) => item.value);
        if (setColor) {
            setColor(colorValues);
        }
    }, []);

    const handleChangeTag = useCallback((option: readonly Option[], _actionMeta: ActionMeta<Option>) => {
        const mutableOption = [...option];
        if (setTag) {
            setTag(mutableOption);
        }
    }, []);

    const handleChangeCategory = useCallback((option: readonly Option[], _actionMeta: ActionMeta<Option>) => {
        const mutableOption = [...option];
        if (setCategory) {
            setCategory(mutableOption);
        }
    }, []);

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
                    <span className='select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px] lg:text-base text-sm'>Showing 1–{show} of {totalProductCount} results</span>
                </div>

                <div className='flex items-center justify-center gap-7 lg:mt-0 mt-6'>
                    <div className='flex items-center lg:gap-4 gap-3'>
                        <span className='lg:text-xl text-sm'>Show</span>
                        <select name="show" value={show} onChange={(e) => setShow && setShow(parseInt(e.target.value))} id="showBy" className='w-[55px] h-[55px] text-center appearance-none border-0 text-[#9F9F9F] lg:text-xl outline-0'>
                            <option value="8" defaultChecked>8</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                            <option value="24">24</option>
                            <option value="28">28</option>
                        </select>
                    </div>
                    <div className='flex items-center lg:gap-4 gap-3'>
                        <span className='lg:text-xl text-sm'>Sort by</span>
                        <select name="sortBy" id="sortBy" value={sortBy} onChange={(e) => setSortBy && setSortBy(e.target.value)} className='lg:w-[188px] h-[55px] px-7 outline-0 appearance-none border-0 text-[#9F9F9F] lg:text-xl'>
                            <option value="nameasc" defaultChecked>A-Z</option>
                            <option value="namedesc">Z-A</option>
                            <option value="priceasc">Low To High</option>
                            <option value="pricedesc">High To Low</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className={`w-[85%] mx-auto py-7 flex-wrap ease-linea items-center gap-1 justify-between duration-500 ${showFiltersMenu ? 'flex' : 'hidden'}`}>
                <div className='xl:w-2/12 w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Category Names</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        onChange={handleChangeCategory}
                        options={categoriesOptions} />
                </div>

                <div className='xl:w-2/12 w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Tags</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        onChange={handleChangeTag}
                        options={tagOptions} />
                </div>

                <div className='xl:w-2/12 w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Sizes</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        onChange={handleChangeSize}
                        options={sizeOptions} />
                </div>

                <div className='xl:w-2/12 w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Colors</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti={true}
                        onChange={handleChangeColor}
                        options={colorOptions} />
                </div>

                <div className='xl:w-1/12 w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Min price</span>
                    <input type="number" className='p-1.5 outline-none w-full' value={minPrice} name='minPrice' onChange={(e) => {
                        setMinPrice && setMinPrice(e.target.value);
                    }} />
                </div>

                <div className='xl:w-1/12 w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Max price</span>
                    <input type="number" className='p-1.5 outline-none w-full' value={maxPrice} name='maxPrice' onChange={(e) => {
                        setMaxPrice && setMaxPrice(e.target.value);
                    }} />
                </div>

                <div className='flex flex-col mt-7'>
                    <select name="isNew" id="isNew" value={isNew} onChange={(e) => setIsNew && setIsNew(e.target.value)} className='py-1.5 px-7 outline-0 appearance-none border-0 text-gray-400'>
                        <option value="null" defaultChecked>All</option>
                        <option value="true">New Arrivals</option>
                        <option value="false">Latest Arrivals</option>
                    </select>
                </div>

            </div>
        </section>
    )
};

export default memo(Filter);