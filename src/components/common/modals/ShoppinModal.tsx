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