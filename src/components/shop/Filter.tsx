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
                        <span className='lg:text-[20px] font-normal text-lg'>Show</span>
                        <input type="text" placeholder='16' className='w-[55px] h-[55px] text-center placeholder:text-[#9F9F9F] font-normal text-[20px] outline-0' />
                    </div>
                    <div className='flex items-center gap-[17px]'>
                        <span className='lg:text-[20px] font-normal text-lg'>Short by</span>
                        <input type="text" placeholder='Default' className='w-[188px] h-[55px] pl-[30px] placeholder:text-[#9F9F9F] font-normal text-[20px] outline-0' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filter