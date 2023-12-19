import { FC } from 'react';
import { useSelector } from 'react-redux';
import filterIcon from '../../assets/images/filter.svg';
import gtidIcon from '../../assets/images/grid.svg';
import viewIcon from '../../assets/images/viewList.svg';
import { RootState } from '../../redux/app/store';
import { useModal } from '../../contexts/ModalContext';

interface FilterProps {
    changeGridClass: (gridType: string) => void;
    gridClass: string
};

const Filter: FC<FilterProps> = ({ changeGridClass, gridClass }) => {
    const totalProduct = useSelector((state: RootState) => state.product.totalProductCount);

    const { openModal } = useModal();

    return (
        <section className='bg-[#F9F1E7]'>
            <div className='flex lg:justify-between lg:flex-row px-28 py-7 flex-col w-full'>
                <div className='flex items-center justify-center gap-6 lg:flex-row flex-col-reverse'>
                    <div className='flex items-center gap-2 cursor-pointer' onClick={() => openModal('FilterPopup')}>
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
        </section>
    )
};

export default Filter;