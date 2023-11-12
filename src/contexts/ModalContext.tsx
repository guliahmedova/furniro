import { useContext, createContext, useState } from "react";
import { ModalContextTypes } from "../models/modalContextTypes";

export const ModalContext = createContext({
    modal: false,
    openModal: () => { },
    closeModal: () => { },
});

export const ModalProvider = ({ children }: ModalContextTypes) => {
    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return <ModalContext.Provider value={{ modal, openModal, closeModal }}>{children}</ModalContext.Provider>
};

export const useModal = () => useContext(ModalContext);