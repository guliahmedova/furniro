import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import md1 from '../../assets/images/sD1.svg';
import md2 from '../../assets/images/sD2.svg';
import deleteIcon from '../../assets/images/deleteItem.svg';
import closeModalIcon from '../../assets/images/closeModal.svg';

const Modal = () => {
    const { modal, closeModal } = useModal();

    useEffect(() => {
        if (modal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modal]);

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (e.target instanceof HTMLElement && e.target.classList.contains('modal-background')) {
            closeModal();
        };
    };

    return (
        modal && (
            <div onClick={handleBackgroundClick} className="modal-background | absolute h-full w-full bg-[#3A3A3A]/70 flex justify-end bottom-0 hover:bottom-0 z-40 opacity-100 transition-all ease-in-out duration-300">
                <div className="bg-white top-0 h-fit py-7 lg:w-fit md:w-fit sm:w-fit w-full">
                    <div className="flex justify-between gap-40 px-8">
                        <h2 className="text-black font-bold text-2xl ">Shopping Cart</h2>
                        <button onClick={closeModal}><img src={closeModalIcon} alt="" /></button>
                    </div>
                    <hr className="w-[287px] bg-[#D9D9D9] mt-7 ml-8" />
                    <div className="flex flex-col gap-5 mt-11 px-8">
                        <div className="flex justify-between items-center">
                            <div className="bg-[#EFE6D1] w-[105px] h-[105px] rounded-xl"> <img className="w-full h-full" src={md1} alt="" /></div>
                            <div className="flex flex-col">
                                <span className="text-black text-base leading-6 font-medium mb-2">Asgaard sofa</span>
                                <div className="flex items-center gap-4"><span className="text-black text-base">1</span><span className="text-base">X</span><span className="text-[#B88E2F] font-medium text-base">Rs. 250,000.00</span></div>
                            </div>
                            <button><img src={deleteIcon} alt="" /></button>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="bg-[#EFE6D1] w-[105px] h-[105px] rounded-xl"> <img className="w-full h-full" src={md2} alt="" /></div>
                            <div className="flex flex-col">
                                <span className="text-black text-base leading-6 font-medium mb-2">Asgaard sofa</span>
                                <div className="flex items-center gap-4"><span className="text-black text-base">1</span><span className="text-base">X</span><span className="text-[#B88E2F] font-medium text-base">Rs. 250,000.00</span></div>
                            </div>
                            <button><img src={deleteIcon} alt="" /></button>
                        </div>
                    </div>
                    <div className="mt-[253px] flex justify-between mb-6 px-8"><span className="text-black text-base leading-6 select-none">Subtotal</span><span className="text-[#B88E2F] font-semibold text-base">Rs. 520,000.00</span></div>
                    <hr className="w-full bg-[#D9D9D9] mb-6" />
                    <div className="bg-[#FFFFFF] flex justify-between items-center gap-[14px] px-8">
                        <Link onClick={closeModal} className="py-[8px] rounded-[50px] border w-fit px-[30px] border-black font-normal text-[12px] leading-[18px]" to="/cart">Cart</Link>
                        <Link onClick={closeModal} className="py-[8px] rounded-[50px] border w-fit px-[30px] border-black font-normal text-[12px] leading-[18px]" to="/checkout">Checkout</Link>
                        <Link onClick={closeModal} className="py-[8px] rounded-[50px] border w-fit px-[30px] border-black font-normal text-[12px] leading-[18px]" to="/comparison">Comparison</Link>
                    </div>
                </div>
            </div>
        )
    );
}

export default Modal;