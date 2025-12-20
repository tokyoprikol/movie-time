import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import Logo from "./UI/Logo/Logo";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 grid grid-cols-[1fr_1fr_1fr] p-5 px-7 shadow-md backdrop-blur-md">
            <Logo />
            <Input type="text" placeholder="Search movies..." />
            <Button>Log In</Button>
        </div>
    );
};

export default Header;
