import { Link } from "react-router-dom";
import closeFuncIcon from '../../../assets/images/closeModal.svg';
import { useModal } from "../../../contexts/ModalContext";
import { RootState, useAppDispatch } from "../../../redux/app/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import deleteIcon from '../../../assets/images/deleteItem.svg'
import { getAllCartItemsByUserId, removeCartItem } from "../../../redux/features/cartSlice";

const ShoppingModal = () => {
    const { modal, closeModal } = useModal();

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target instanceof HTMLElement && e.target.classList.contains('modal-background')) {
            closeModal();
        };
    };
    const cartItems = useSelector((state: RootState) => state.cart.getAllCartItems);
    const loading = useSelector((state: RootState) => state.shop.loading);

    let totalSalePrice = 0;

    cartItems.forEach((cartItem) => {
        cartItem.cartItems.forEach((item) => {
            totalSalePrice += item.salePrice * item.count;
        });
    });

    const dispatch = useAppDispatch();
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (userId) {
            dispatch(getAllCartItemsByUserId(parseInt(userId)));
        }
    }, [dispatch, cartItems.length]);

    const removeCartItemBtnClickHanler = (colorId: number, productId: number) => {
        if (userId) {
            dispatch(removeCartItem({
                userId: parseInt(userId),
                productId: productId,
                colorId: colorId
            }))
        }
    };

    return (
        modal && (
            <div onClick={handleBackgroundClick} className={`modal-background | fixed h-full w-full bg-[#3A3A3A]/70 flex justify-end bottom-0 z-40 opacity-100 transition-all ease-in-out duration-500 ${modal ? 'right-0' : 'right-[-100%]'}`}>
                <div className="bg-white top-0 h-fit py-7 w-auto">
                    <div className="flex justify-between gap-40 lg:px-8 px-3">
                        <h2 className="text-black font-bold lg:text-2xl text-sm">Shopping Cart</h2>
                        <button onClick={closeModal}><img src={closeFuncIcon} alt="close-icon" /></button>
                    </div>
                    <hr className="lg:w-[287px] bg-[#D9D9D9] mt-7 ml-8" />

                    {loading === 'pending' ? (
                        <div className="text-center h-[50vh] w-[30%] flex items-center justify-center">
                            <div role="status">
                                <svg aria-hidden="true" className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#B88E2F]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : <>
                        {cartItems?.length ? (
                            <div className="flex flex-col gap-5 mt-11 lg:px-8 px-3 overflow-y-scroll h-[50vh]">
                                {cartItems?.map((item) => (
                                    item?.cartItems?.map((cart) => {
                                        return (
                                            <div className="flex justify-between items-center" key={cart.productId}>
                                                <div className="bg-[#EFE6D1] w-[105px] h-[105px] rounded-xl"> <img className="w-full h-full" src={cart.productImages.imageFiles[0]} alt="product-img" /></div>
                                                <div className="flex flex-col">
                                                    <span className="text-black text-base leading-6 font-medium mb-2">{cart.productTitle}</span>
                                                    <div className="flex items-center gap-4"><span className="text-black text-base">{cart.count}</span><span className="text-base">X</span><span className="text-[#B88E2F] font-medium text-base">Rs. {cart.salePrice}</span></div>
                                                </div>
                                                <button onClick={() => removeCartItemBtnClickHanler(cart.productImages.id, cart.productId)}><img src={deleteIcon} alt="delete-icon" /></button>
                                            </div>
                                        )
                                    })
                                ))}
                            </div>
                        ) : (<div className="py-28 flex justify-center items-center flex-col gap-3">
                            <span className="text-red-600 font-bold text-2xl">Your Cart is empty!</span>
                            <p className="font-medium text-gray-600">Let's shop now!</p>
                            <Link to="/shop" className="text-white font-medium text-lg bg-[#B88E2F] rounded-sm shadow-md p-3">Start Shopping</Link>
                        </div>)}
                    </>}

                    <div className="mt-20 flex justify-between mb-6 lg:px-8 px-3"><span className="text-black text-base leading-6 select-none">Subtotal</span><span className="text-[#B88E2F] font-semibold text-base">Rs. {totalSalePrice.toFixed(6)}</span></div>

                    <hr className="w-full bg-[#D9D9D9] mb-6" />
                    <div className="bg-[#FFFFFF] flex justify-between items-center lg:gap-[14px] lg:px-8 px-3">
                        <Link onClick={closeModal} className="py-[8px] rounded-[50px] border w-fit px-[30px] border-black font-normal text-[12px] leading-[18px]" to="/cart">Cart</Link>
                        <Link onClick={closeModal} className="py-[8px] rounded-[50px] border w-fit px-[30px] border-black font-normal text-[12px] leading-[18px]" to="/checkout">Checkout</Link>
                        <Link onClick={closeModal} className="py-[8px] rounded-[50px] border w-fit px-[30px] border-black font-normal text-[12px] leading-[18px]" to="/comparison">Comparison</Link>
                    </div>
                </div>
            </div>
        )
    );
}

export default ShoppingModal;