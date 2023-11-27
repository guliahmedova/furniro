import d from '../../assets/images/mainD.svg';
import deleteIcon from '../../assets/images/deleteIcon.svg';

const CartTotals = () => {
    return (
        <section className=' bg--200'>
            <div className="pt-[72px] pb-[85px] flex gap-8 xl:flex-row flex-col w-[85%] mx-auto bg--500 justify-between lg:px-0 px-3">
                <div className='lg:block flex lg:flex-row flex-col w-full'>
                    <div className="bg-[#F9F1E7] flex items-center px-6 gap-6 lg:gap-28 lg:px-28 py-4 w-full rounded-sm">
                        <span className="font-bold w-2/12 flex justify-end lg:leading-6 lg:text-base text-sm select-none">Product</span>
                        <span className="font-bold w-2/12 flex justify-center lg:leading-6 lg:text-base text-sm select-none">Price</span>
                        <span className="font-bold w-3/12 flex justify-center lg:leading-6 lg:text-base text-sm select-none">Quantity</span>
                        <span className="font-bold flex justify-start lg:leading-6 lg:text-base text-sm select-none">Subtotal</span>
                    </div>

                    <div className='flex px-6 lg:px-0 items-center justify-between lg:gap-[68px] gap-6 lg:pt-[55px] lg:mt-0 mt-6 lg:overflow-x-auto overflow-x-scroll h-fit'>
                        <div className='flex lg:gap-[34px] items-center lg:py-0 py-3 gap-3 w-fit h-fit'>
                            <div className='lg:w-[108px] lg:h-[105px] w-12 h-12 bg-[#F9F1E7] rounded-lg flex justify-center items-center'>
                                <img src={d} alt="" className='w-24 h-24' />
                            </div>
                            <span className='text-[#9F9F9F] lg:leading-6 lg:text-base text-sm flex-shrink-0'>Asgaard sofa</span>
                        </div>
                        <span className='text-[#9F9F9F] lg:leading-6 lg:text-base text-sm flex-shrink-0'>Rs. 250,000.00</span>
                        <div className='text-[#000000] border-2 rounded-lg py-1 px-3 border-[#9F9F9F]'>1</div>
                        <span className='text-[#000000] lg:leading-6 lg:text-base text-sm flex-shrink-0'>Rs. 250,000.00</span>
                        <button className='flex-shrink-0 pr-6'><img src={deleteIcon} alt="" /></button>
                    </div>

                </div>

                <div className="bg-[#F9F1E7] xl:w-fit rounded-sm lg:px-20 lg:pb-[80px] px-6 pb-6 max-h-[390px]">
                    <h1 className="text-center pt-[20px] text-[#000000] font-semibold lg:text-[32px] text-2xl leading-[48px] lg:mb-[61px] mb-6 select-none">Cart Totals</h1>
                    <div className="mb-[31px] flex justify-between">
                        <span className="font-medium text-[16px] leading-6 select-none">Subtotal</span>
                        <span className="text-[#9F9F9F] text-base leading-6">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between mb-[42px]">
                        <span className="font-medium text-[16px] leading-6 select-none">Total</span>
                        <span className="text-[#B88E2F] font-medium lg:text-[20px] text-lg leading-7">Rs. 250,000.00</span>
                    </div>
                    <button className="text-[#000000] border-2 border-[#000000] py-[14px] text-[20px] leading-7 rounded-lg w-[222px] block mx-auto hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out">Check Out</button>
                </div>
            </div>
        </section>
    )
};

export default CartTotals;