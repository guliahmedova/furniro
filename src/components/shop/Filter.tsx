import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import filterIcon from '../../assets/images/filter.svg';
import gtidIcon from '../../assets/images/grid.svg';
import viewIcon from '../../assets/images/viewList.svg';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getAllColors, getAllSizes } from '../../redux/features/productSlice';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

interface FilterProps {
    changeGridClass: (gridType: string) => void;
    gridClass: string
};

const Filter: FC<FilterProps> = ({ changeGridClass, gridClass }) => {
    const totalProduct = useSelector((state: RootState) => state.product.totalProductCount);
    const [showFiltersMenu, setShowFiltersMenu] = useState(false);

    const sizes = useSelector((state: RootState) => state.product.sizes);
    const colors = useSelector((state: RootState) => state.product.colors);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllSizes());
        dispatch(getAllColors());
    }, [dispatch]);


    const sizeOptions = sizes?.map((size) => {
        return { value: size.sizeName, label: size.sizeName };
    });

    const colorOptions = colors?.map((color) => {
        return { value: color.colorHexCode, label: <span style={{ backgroundColor: `${color.colorHexCode}` }} className='w-10 h-6 block rounded-full mx-auto text-center'></span> }
    });

    //category names , tags

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
                        <select name="product-counts" id="showBy" className='w-[55px] h-[55px] text-center appearance-none border-0 text-[#9F9F9F] lg:text-xl outline-0'>
                            <option value="Default" defaultChecked>4</option>
                            <option value="Example 1">16</option>
                            <option value="Example 2">64</option>
                        </select>
                    </div>
                    <div className='flex items-center lg:gap-4 gap-3'>
                        <span className='lg:text-xl text-sm'>Short by</span>
                        <select name="product-counts" id="shortBy" className='lg:w-[188px] h-[55px] px-7 outline-0 appearance-none border-0 text-[#9F9F9F] lg:text-xl'>
                            <option value="Default" defaultChecked>Default</option>
                            <option value="Example 1">Example 1</option>
                            <option value="Example 2">Example 2</option>
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
                        isMulti
                        options={sizeOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Tags</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={sizeOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Sizes</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={sizeOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Colors</span>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        options={colorOptions} />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Min price</span>
                    <input type="text" className='p-1.5 outline-none' />
                </div>

                <div className='xl:w-auto w-full'>
                    <span className='font-medium capitalize text-gray-500 mb-2 block text-sm'>Max price</span>
                    <input type="text" className='p-1.5 outline-none' />
                </div>
            </div>
        </section>
    )
};

export default Filter;