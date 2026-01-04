import { useState } from "react";

const AuthModal = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/80">
            <div className="w-100 rounded-2xl border-2 border-neutral-500 bg-neutral-800 p-10">
                <span className="text-3xl font-semibold">Login</span>
                <div className="mt-5">
                    <span className="font-semibold">Email</span>
                    <input
                        className="rounded-lg bg-neutral-100 px-2 py-1 text-black"
                        type="text"
                        value={user.email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
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
                            setUser({ ...user, password: e.target.value })
                        }
                    />
                </div>
                <div className="mt-8">
                    Dont have an account ?{" "}
                    <span className="cursor-pointer font-semibold">
                        Sign Up
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
