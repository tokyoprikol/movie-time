import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
    return (
        <input
            {...props}
            className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-1 text-black focus:ring-1 focus:ring-neutral-500 focus:outline-none"
        />
    );
};

export default Input;
