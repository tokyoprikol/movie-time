type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="bg-neutral-50 rounded-xl text-black font-bold px-17 py-1 hover:bg-neutral-200 transition cursor-pointer"
        >
            {children}
        </button>
    );
};

export default Button;
