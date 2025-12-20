type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="cursor-pointer justify-self-end rounded-xl bg-neutral-50 px-6 py-1 font-semibold text-black transition hover:bg-neutral-200"
        >
            {children}
        </button>
    );
};

export default Button;
