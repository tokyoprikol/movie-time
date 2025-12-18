import Button from "./UI/button/Button";
import Input from "./UI/input/Input";
import Logo from "./UI/Logo/Logo";

const Header = () => {
    return (
        <div className="grid grid-cols-[1fr_1fr_1fr] p-5 px-7">
            <Logo />
            <Input type="text" placeholder="Search movies..." />
            <Button>Log In</Button>
        </div>
    );
};

export default Header;
