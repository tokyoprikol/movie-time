import type { Dispatch, SetStateAction } from "react";
import type { User } from "../../types";
import { useModalAuthStore } from "../../store/AuthModalStore";
import { useSupabaseAuth } from "../../hooks/useSupabaseAuth.ts";

interface SignUpProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

const SignUp = ({ user, setUser }: SignUpProps) => {
    const { setLoginMode } = useModalAuthStore();
    const { signUp, loading, error, successMessage } = useSupabaseAuth();

    const handleSignUp = (user: User) => {
        signUp(user.email, user.password);
    };

    return (
        <>
            <span className="text-3xl font-semibold">Sign Up</span>
            <div className="mt-5">
                <span className="font-semibold">Email</span>
                <input
                    className="rounded-lg bg-neutral-100 px-2 py-1 text-black"
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                        setUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                />
            </div>
            <div className="mt-8">
                <span className="font-semibold">Password</span>
                <input
                    className="rounded-lg bg-neutral-100 px-2 py-1 text-black"
                    type="password"
                    value={user.password}
                    onChange={(e) =>
                        setUser((prev) => ({
                            ...prev,
                            password: e.target.value,
                        }))
                    }
                />
            </div>
            <button
                className="mt-5 cursor-pointer rounded-xl bg-neutral-50 px-2 py-1 font-semibold text-neutral-800"
                onClick={() => handleSignUp(user)}
            >
                {loading ? "Creating acc..." : "Sing Up"}
            </button>
            <div className="mt-8">
                Already have an account ?{" "}
                <span
                    className="cursor-pointer font-semibold"
                    onClick={setLoginMode}
                >
                    Login
                </span>
            </div>
            {error && <span className="text-red-500">{error}</span>}
            {successMessage && (
                <span className="text-green-500">{successMessage}</span>
            )}
        </>
    );
};

export default SignUp;
