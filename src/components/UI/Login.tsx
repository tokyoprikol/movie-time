import type { Dispatch, SetStateAction } from "react";
import type { User } from "../../types";
import { useModalAuthStore } from "../../store/AuthModalStore";
import { useSupabaseAuth } from "../../hooks/useSupabaseAuth.ts";

interface LoginProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

const Login = ({ user, setUser }: LoginProps) => {
    const { setSignUpMode } = useModalAuthStore();
    const { signIn, loading, error } = useSupabaseAuth();

    const handleSignIn = (user: User) => {
        signIn(user.email, user.password);
    };

    return (
        <>
            <span className="text-3xl font-semibold">Login</span>
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
                onClick={() => handleSignIn(user)}
            >
                {loading ? "Loging..." : "Login"}
            </button>
            <div className="mt-8">
                Dont have an account ?{" "}
                <span
                    className="cursor-pointer font-bold"
                    onClick={setSignUpMode}
                >
                    Sign Up
                </span>
            </div>
            {error && <span className="text-red-500">{error}</span>}
        </>
    );
};

export default Login;
