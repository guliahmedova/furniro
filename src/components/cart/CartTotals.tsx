import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteIcon from '../../assets/images/deleteIcon.svg';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { clearCart, getAllCartItemsByUserId, removeCartItem } from '../../redux/features/cartSlice';

const CartTotals = () => {
    const dispatch = useAppDispatch();
    const userId = localStorage.getItem('userId');
    const cartItems = useSelector((state: RootState) => state.cart.getAllCartItems);
    const { isDelete, subTotal } = useSelector((state: RootState) => state.cart);

    const userId_Int = useMemo(() => {
        if (userId) {
            return parseInt(userId);
        };
    }, [userId]);

    useEffect(() => {
        if (userId_Int) {
            dispatch(getAllCartItemsByUserId(userId_Int));
        }
    }, [dispatch, cartItems.length, isDelete, userId_Int]);

    const removeCartItemBtnClickHanler = (colorId: number, productId: number) => {
        if (userId_Int) {
            dispatch(removeCartItem({
                userId: userId_Int,
                productId: productId,
                colorId: colorId,
            }))
        }
    };

    const clearCartBtnClickHandler = () => {
        if (userId_Int) {
            dispatch(clearCart(userId_Int));
        }
    };

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
                                <th scope="col" className="px-6 py-3">Color</th>
                                <th scope="col" className="px-6 py-3"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {cartItems?.map((cartItem) => (
                                cartItem.cartItems.map((item) => {
                                    return (
                                        <tr className='w-full overflow-x-scroll h-[20vh]' key={item.productId}>
                                            <td>
                                                <div className='bg-[#F9F1E7] w-24 h-24 flex items-center justify-center rounded-xl'><img src={item.productImages.imageFiles[0]} className='w-full h-full object-cover rounded-xl border hover:scale-[1.1] duration-300' alt="" /></div>
                                            </td>
                                            <td className='text-[#9F9F9F] text-base'>{item.productTitle} - </td>
                                            <td className='text-[#9F9F9F] text-base text-center'>${item.salePrice.toFixed(2).replace(/(\.0+|0+)$/, '')}</td>
                                            <td><span className='border border-[#9F9F9F] w-6 h-6 py-1 px-3 rounded-md mx-auto flex items-center justify-center select-none'>{item.count}</span></td>
                                            <td className='text-black font-medium text-base text-center'>${item.subtotal.toFixed(2).replace(/(\.0+|0+)$/, '')}</td>
                                            <td><span style={{ backgroundColor: `${item.productImages.colorHexCode}` }} className='block w-6 h-6 rounded-full mx-auto'></span></td>
                                            <td><button onClick={() => removeCartItemBtnClickHanler(item.productImages.id, item.productId)} className='block mx-auto'><img src={deleteIcon} alt="" /></button></td>
                                        </tr>
                                    )
                                })
                            ))}
                        </tbody>
                    </table>

                    {cartItems?.length > 0 && (
                        <button onClick={clearCartBtnClickHandler} type='button' className="text-[#000000] border-2 mt-10 border-[#000000] py-[14px] text-[20px] leading-7 rounded-lg w-4/12 block mx-auto hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out mb-5">Remove All Items</button>
                    )}
                </div>

                <div className="bg-[#F9F1E7] xl:w-fit rounded-sm lg:px-20 lg:pb-[80px] px-6 pb-6 max-h-[390px]">
                    <h1 className="text-center pt-[20px] text-[#000000] font-semibold lg:text-[32px] text-2xl leading-[48px] lg:mb-[61px] mb-6 select-none">Cart Totals</h1>
                    <div className="mb-[31px] flex justify-between items-center">
                        <span className="font-medium text-[16px] leading-6 select-none">Subtotal</span>
                        <span className="text-[#9F9F9F] text-base leading-6">${subTotal.toFixed(2).replace(/(\.0+|0+)$/, '')}</span>
                    </div>
                    <div className="flex justify-between items-center mb-[42px]">
                        <span className="font-medium text-[16px] leading-6 select-none">Total</span>
                        <span className="text-[#B88E2F] font-medium lg:text-[20px] text-lg leading-7">${subTotal.toFixed(2).replace(/(\.0+|0+)$/, '')}</span>
                    </div>
                    <Link to="/checkout" className="text-[#000000] text-center border-2 border-[#000000] py-[14px] text-[20px] leading-7 rounded-lg w-[222px] block mx-auto hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out">Check Out</Link>
                </div>

            </div>
        </section>
    )
};

export default CartTotals;