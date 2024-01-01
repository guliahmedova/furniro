import { createContext, useContext, useState } from "react";
import { ModalContextTypes } from "../models/ModalContextTypes";

export const ModalContext = createContext({
    modal: "",
    openModal: (name: string) => { name },
    closeModal: () => { },
});

export const ModalProvider = ({ children }: ModalContextTypes) => {
    const [modal, setModal] = useState('');

    const openModal = (name: string) => {
        setModal(name);
    };

    const closeModal = () => {
        setModal('');
    };

    return <ModalContext.Provider value={{ modal, openModal, closeModal }}>{children}</ModalContext.Provider>
};

export const useModal = () => useContext(ModalContext);