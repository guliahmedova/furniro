import gtidIcon from '../../assets/images/grid.svg';
import filterIcon from '../../assets/images/filter.svg';
import viewIcon from '../../assets/images/viewList.svg';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';

interface FilterProps {
    changeGridClass: (gridType: string) => void;
    gridClass: string
};

const Filter: FC<FilterProps> = ({ changeGridClass, gridClass }) => {
    const products = useSelector((state: RootState) => state.product.entities);

    return (
        <section className='bg-[#F9F1E7]'>
            <div className='flex lg:justify-between lg:flex-row max-w-[1236px] mx-auto py-[30px] flex-col'>
                <div className='flex items-center lg:flex-row md:flex-row sm:flex-row lg:justify-start justify-center gap-[24px] lg:px-0 px-3 flex-col'>
                    <div className='flex items-center gap-[8px]'>
                        <img src={filterIcon} alt="" />
                        <span>Filter</span>
                    </div>
                    <img src={gtidIcon} alt="" onClick={() => changeGridClass('grid')} className={`${gridClass === 'grid' ? 'cursor-default' : 'cursor-pointer'}`} />
                    <img src={viewIcon} alt="" onClick={() => changeGridClass('view')} className={`${gridClass === 'view' ? 'cursor-default' : 'cursor-pointer'}`} />
                    <span className='select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px] lg:text-base text-sm'>Showing 1–16 of {products.length} results</span>
                </div>

                <div className='flex items-center lg:flex-row flex-col gap-[30px] lg:mt-0 mt-6'>
                    <div className='flex items-center gap-[17px]'>
                        <span className='lg:text-[20px] text-lg'>Show</span>
                        <input type="text" placeholder='16' className='w-[55px] h-[55px] appearance-none text-center border-0 text-[#9F9F9F] text-xl' />
                    </div>
                    <div className='flex items-center gap-[17px]'>
                        <span className='lg:text-[20px] text-lg'>Short by</span>
                        <select name="product-counts" id="shortBy" className='w-[188px] h-[55px] px-7 appearance-none border-0 text-[#9F9F9F] text-xl'>
                            <option value="Default" defaultChecked>Default</option>
                            <option value="Example 1">Example 1</option>
                            <option value="Example 2">Example 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter