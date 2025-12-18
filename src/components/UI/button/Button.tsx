type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className="justify-self-end bg-neutral-50 rounded-xl text-black font-bold px-6 py-1 hover:bg-neutral-200 transition cursor-pointer"
        >
            {children}
        </button>
    );
};

export default Button;
