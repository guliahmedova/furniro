import filterIcon from '../../assets/images/filter.svg';
import viewIcon from '../../assets/images/viewList.svg';
import gtidIcon from '../../assets/images/grid.svg';

const Filter = () => {
    return (
        <section className='bg-[#F9F1E7]'>
            <div className='flex lg:justify-between lg:flex-row max-w-[1236px] mx-auto py-[30px] flex-col'>
                <div className='flex items-center lg:flex-row md:flex-row sm:flex-row lg:justify-start justify-center gap-[24px] lg:px-0 px-3 flex-col'>
                    <div className='flex items-center gap-[8px]'>
                        <img src={filterIcon} alt="" />
                        <span>Filter</span>
                    </div>
                    <img src={gtidIcon} alt="" />
                    <img src={viewIcon} alt="" />
                    <span className='select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px] lg:text-base text-sm'>Showing 1–16 of 32 results</span>
                </div>

                <div className='flex items-center lg:flex-row flex-col gap-[30px] lg:mt-0 mt-6'>
                    <div className='flex items-center gap-[17px]'>
                        <span className='lg:text-[20px] text-lg'>Show</span>
                        <select name="product-counts" id="productCounts" className='w-[55px] h-[55px] appearance-none text-center border-0 text-[#9F9F9F] text-xl'>
                            <option value="16" defaultChecked>16</option>
                            <option value="32">32</option>
                            <option value="48">48</option>
                            <option value="64">64</option>
                        </select>
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