import { create } from "zustand";

interface ModalAuthStore {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;

    mode: string;
    setLoginMode: () => void;
    setSignUpMode: () => void;
}

export const useModalAuthStore = create<ModalAuthStore>((set) => ({
    isModalOpen: false,
    openModal: () => set({ isModalOpen: true }),
    closeModal: () => set({ isModalOpen: false }),

    mode: "login",
    setLoginMode: () => set({ mode: "login" }),
    setSignUpMode: () => set({ mode: "signUp" }),
}));
