import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
    return (
        <input
            {...props}
            className="w-full max-w-md bg-neutral-50 px-4 py-1 rounded-xl border text-black border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-500"
        />
    );
};

export default Input;
