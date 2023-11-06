import d from '../../assets/images/mainD.svg';
import deleteIcon from '../../assets/images/deleteIcon.svg';

const CartTotals = () => {
    return (
        <section>
            <div className="max-w-[1240px] mx-auto pt-[72px] pb-[85px] flex gap-8">
                <div>
                    <div className="bg-[#F9F1E7] flex gap-28 px-28 py-4 rounded-sm">
                        <span className="font-medium text-[1rem] leading-6">Product</span>
                        <span className="font-medium text-[1rem] leading-6">Price</span>
                        <span className="font-medium text-[1rem] leading-6">Quantity</span>
                        <span className="font-medium text-[1rem] leading-6">Subtotal</span>
                    </div>

                    <div className='flex items-center gap-[68px] pt-[55px]'>
                        <div className='flex gap-[34px] items-center'>
                            <div className='w-[108px] h-[105px] bg-[#F9F1E7] rounded-lg flex justify-center items-center'>
                                <img src={d} alt="" />
                            </div>
                            <span className='text-[#9F9F9F] font-normal text-[1rem] leading-6'>Asgaard sofa</span>
                        </div>
                        <span className='text-[#9F9F9F] font-normal text-[1rem] leading-6'>Rs. 250,000.00</span>
                        <div className='text-[#000000] border-2 rounded-lg py-1 px-3 text-[1rem] border-[#9F9F9F]'>1</div>
                        <span className='text-[#000000] text-[1rem] font-normal leading-6'>Rs. 250,000.00</span>
                        <button><img src={deleteIcon} alt="" /></button>
                    </div>

                </div>

                <div className="bg-[#F9F1E7] w-[393px] rounded-sm px-[75px] pb-[80px]">
                    <h1 className="text-center pt-[20px] text-[#000000] font-semibold text-[32px] leading-[48px] mb-[61px]">Cart Totals</h1>
                    <div className="mb-[31px] flex justify-between">
                        <span className="font-medium text-[16px] leading-6">Subtotal</span>
                        <span className="text-[#9F9F9F] font-normal text-[1rem] leading-6">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between mb-[42px]">
                        <span className="font-medium text-[16px] leading-6">Total</span>
                        <span className="text-[#B88E2F] font-medium text-[20px] leading-7">Rs. 250,000.00</span>
                    </div>
                    <button className="text-[#000000] border-2 border-[#000000] py-[14px] font-normal text-[20px] leading-7 rounded-lg w-[222px] mx-auto">Check Out</button>
                </div>
            </div>
        </section>
    )
}

export default CartTotals;