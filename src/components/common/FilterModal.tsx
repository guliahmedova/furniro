import closeIcon from '../../assets/images/closeModal.svg';
import { useModal } from '../../contexts/ModalContext';

const FilterModal = () => {
    const { closeModal } = useModal();

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target instanceof HTMLElement && e.target.classList.contains('filter-background')) {
            closeModal();
        };
    };

    return (
        <div onClick={handleBackgroundClick} className="filter-background | fixed z-30 top-0 left-0 flex justify-center items-center w-full h-full bg-[#3A3A3A]/60">
            <div className="bg-white min-w-[50%] min-h-[50%] rounded-lg p-4">
                <div className='flex justify-between items-center mb-10'>
                    <h1 className='font-extrabold text-3xl'>Filters</h1>
                    <button onClick={closeModal}><img src={closeIcon} alt="" /></button>
                </div>
                <form>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="categoryName" className="font-bold text-gray-700 text-md mb-2">Category Names</label>
                        <input type="text" id="categoryName" className="border p-2 h-auto rounded-md outline-none text-black" placeholder="Type Category name..." />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="categoryTags" className="font-bold text-gray-700 text-md mb-2">Tags</label>
                        <input type="text" id="categoryTags" className="border p-2 h-auto rounded-md outline-none text-black" placeholder="Type Tags..." />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="categorySizes" className="font-bold text-gray-700 text-md mb-2">Sizes</label>
                        <input type="text" id="categorySizes" className="border p-2 h-auto rounded-md outline-none text-black" placeholder="Type Sizes..." />
                    </div>
                    <div className="flex flex-col mb-3">
                        <label htmlFor="categoryColors" className="font-bold text-gray-700 text-md mb-2">Colors</label>
                        <input type="text" id="categoryColors" className="border p-2 h-auto rounded-md outline-none text-black" placeholder="Type Colors..." />
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="flex flex-col w-full">
                            <label htmlFor="minPrice" className="font-bold text-gray-700 text-md mb-2">Min Price</label>
                            <input type="text" id="minPrice" className="border p-2 h-auto rounded-md outline-none text-black" />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="minPrice" className="font-bold text-gray-700 text-md mb-2">Max Price</label>
                            <input type="text" id="minPrice" className="border p-2 h-auto rounded-md outline-none text-black" />
                        </div>
                    </div>
                    <div className="flex items-center mt-3">
                        <input id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checked-checkbox" className="ms-2 text-sm font-bold text-md text-black">New</label>
                    </div>
                    <div className='w-full flex justify-end'>
                        <button className='bg-[#B88E2F] text-white rounded-md w-[30%] py-3 text-xl font-medium'>Apply</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FilterModal