import Logo from "./UI/Logo/Logo";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between p-5 px-7 shadow-md backdrop-blur-md">
            <Logo />
            <Input type="text" placeholder="Search movies..." />
            <Button>Log In</Button>
        </div>
    );
};

export default Header;
