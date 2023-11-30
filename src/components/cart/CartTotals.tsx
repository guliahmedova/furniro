import d from '../../assets/images/mainD.svg';
import deleteIcon from '../../assets/images/deleteIcon.svg';

const CartTotals = () => {
    return (
        <section>
            <div className="pt-[72px] pb-[85px] flex gap-8 xl:flex-row flex-col w-[85%] mx-auto bg--500 justify-between lg:px-0 px-3">

                <div className='relative overflow-x-auto w-full | cart-table'>
                    <table className="w-full">
                        <thead className='w-full bg-[#F9F1E7] h-14'>
                            <tr>
                                <th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3"></th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Quantity</th>
                                <th scope="col" className="px-6 py-3">Subtotal</th>
                                <th scope="col" className="px-6 py-3">Size</th>
                                <th scope="col" className="px-6 py-3">Color</th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='w-full overflow-x-scroll h-[20vh]'>
                                <td>
                                    <div className='bg-[#F9F1E7] w-24 h-24 flex items-center justify-center rounded-xl'><img src={d} alt="" /></div>
                                </td>
                                <td className='text-[#9F9F9F] text-base'>Asgaard sofa</td>
                                <td className='text-[#9F9F9F] text-base text-center'>Rs. 250,000.00</td>
                                <td><span className='border border-[#9F9F9F] w-6 h-6 py-1 px-3 rounded-md mx-auto flex items-center justify-center select-none'>1</span></td>
                                <td className='text-black font-medium text-base'>Rs. 250,000.00</td>
                                <td><span className='w-6 h-6 bg-[#B88E2F] text-[12px] select-none rounded-md py-1 px-3 flex items-center justify-center uppercase text-white mx-auto'>xl</span></td>
                                <td><span className='block w-6 h-6 bg-red-600 rounded-full mx-auto'></span></td>
                                <td><button className='block mx-auto'><img src={deleteIcon} alt="" /></button></td>
                            </tr>
                        </tbody>
                    </table>
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