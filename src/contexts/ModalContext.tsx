import { createContext, useContext, useState } from "react";
import { ShoppinModalType } from "../models/ShoppinModalType";

export const ModalContext = createContext({
    modal: "",
    openModal: (name: string) => { name },
    closeModal: () => { },
});

export const ModalProvider = ({ children }: ShoppinModalType) => {
    const [modal, setModal] = useState('');

    const openModal = (name: string) => {
        setModal(name);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModal('');
        document.body.style.overflow = 'unset';
    };

    return <ModalContext.Provider value={{ modal, openModal, closeModal }}>{children}</ModalContext.Provider>
};

export const useModal = () => useContext(ModalContext);