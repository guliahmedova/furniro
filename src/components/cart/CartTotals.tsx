import d from '../../assets/images/mainD.svg';
import deleteIcon from '../../assets/images/deleteIcon.svg';

const CartTotals = () => {
    return (
        <section>
            <div className="max-w-[1240px] mx-auto pt-[72px] pb-[85px] flex gap-8 lg:flex-row flex-col lg:px-0 px-3">
                <div className='lg:block flex lg:flex-row flex-col'>
                    <div className="bg-[#F9F1E7] flex px-3 justify-between gap-6 lg:gap-28 lg:px-28 py-4 rounded-sm">
                        <span className="font-medium lg:leading-6">Product</span>
                        <span className="font-medium lg:leading-6">Price</span>
                        <span className="font-medium lg:leading-6">Quantity</span>
                        <span className="font-medium lg:leading-6">Subtotal</span>
                    </div>

                    <div className='flex items-center lg:gap-[68px] gap-6 lg:pt-[55px] lg:mt-0 mt-6 lg:overflow-auto overflow-x-scroll'>
                        <div className='flex lg:gap-[34px] items-center lg:py-0 py-3 gap-3 w-fit h-fit'>
                            <div className='lg:w-[108px] lg:h-[105px] w-12 h-12 bg-[#F9F1E7] rounded-lg flex justify-center items-center'>
                                <img src={d} alt="" className='w-24 h-24'/>
                            </div>
                            <span className='text-[#9F9F9F] lg:leading-6 lg:text-base text-sm'>Asgaard sofa</span>
                        </div>
                        <span className='text-[#9F9F9F] lg:leading-6 lg:text-base text-sm'>Rs. 250,000.00</span>
                        <div className='text-[#000000] border-2 rounded-lg py-1 px-3 border-[#9F9F9F]'>1</div>
                        <span className='text-[#000000] lg:leading-6 lg:text-base text-sm'>Rs. 250,000.00</span>
                        <button className='flex-shrink-0'><img src={deleteIcon} alt="" /></button>
                    </div>

                </div>

                <div className="bg-[#F9F1E7] lg:w-[393px] rounded-sm lg:px-[75px] lg:pb-[80px] px-6 pb-6">
                    <h1 className="text-center pt-[20px] text-[#000000] font-semibold lg:text-[32px] text-2xl leading-[48px] lg:mb-[61px] mb-6">Cart Totals</h1>
                    <div className="mb-[31px] flex justify-between">
                        <span className="font-medium text-[16px] leading-6">Subtotal</span>
                        <span className="text-[#9F9F9F] text-base leading-6">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between mb-[42px]">
                        <span className="font-medium text-[16px] leading-6">Total</span>
                        <span className="text-[#B88E2F] font-medium lg:text-[20px] text-lg leading-7">Rs. 250,000.00</span>
                    </div>
                    <button className="text-[#000000] border-2 border-[#000000] py-[14px] text-[20px] leading-7 rounded-lg w-[222px] block mx-auto">Check Out</button>
                </div>
            </div>
        </section>
    )
}

export default CartTotals;