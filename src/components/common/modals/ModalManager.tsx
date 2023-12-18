import { useModal } from "../../../contexts/ModalContext";
import Modal from './Modal';
import FilterModal from "../FilterModal";

interface IModal {
    [key: string]: React.ComponentType<any>;
};

const ModalLookUp: IModal = {
    ShoppingModal: Modal,
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