import { FC, ReactNode } from "react";
import closeIcon from '../../assets/images/closeModal.svg';

interface AddToCartModalProps {
    children: ReactNode,
    isModalOpen?: boolean,
    handleCLoseBtnClick: () => void
};

const AddToCartModal: FC<AddToCartModalProps> = ({ children, isModalOpen, handleCLoseBtnClick }) => {
    return (
        <div onClick={handleCLoseBtnClick} className={`top-0 left-0 flex justify-center items-center z-40 bg-[#3A3A3A]/60 h-screen w-full ${isModalOpen ? 'fixed' : 'hidden'}`}>
            <div className="bg-white rounded-sm lg:w-auto p-3 w-[95%] mx-auto">
                <div className="flex items-center justify-between border-b pb-3">
                    <span className="font-bold text-xl">Add To Cart</span>
                    <button onClick={handleCLoseBtnClick}><img src={closeIcon} alt="" /></button>
                </div>
                <div className="py-3">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default AddToCartModal;