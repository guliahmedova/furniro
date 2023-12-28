import { useModal } from "../../../contexts/ModalContext";
import ShoppinModal from './ShoppinModal';
import FilterModal from "../FilterModal";

interface IModal {
    [key: string]: React.ComponentType<any>;
};

const ModalLookUp: IModal = {
    ShoppingModal: ShoppinModal,
    FilterPopup: FilterModal
};

const ModalManager = () => {
    const { modal, closeModal } = useModal();
    if (!modal) {
        return null;
    }
    
    const Modal = ModalLookUp[modal];

    return <Modal closeFunc={closeModal} />;
};

export default ModalManager;