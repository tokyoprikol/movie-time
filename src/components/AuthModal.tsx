import { useState } from "react";
import { useModalAuthStore } from "../store/AuthModalStore.ts";
import Login from "./UI/Login.tsx";
import SignUp from "./UI/SignUp.tsx";

const AuthModal = () => {
    const { isModalOpen, closeModal, mode } = useModalAuthStore();
    const [user, setUser] = useState({ email: "", password: "" });

    return (
        isModalOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80"
                onClick={closeModal}
            >
                <div
                    className="w-100 rounded-2xl border-2 border-neutral-500 bg-neutral-800 p-10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {mode === "login" ? (
                        <Login user={user} setUser={setUser} />
                    ) : (
                        <SignUp user={user} setUser={setUser} />
                    )}
                </div>
            </div>
        )
    );
};

export default AuthModal;
