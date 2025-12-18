import Logo from "../assets/imgs/film.svg";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

const Header = () => {
    return (
        <div className="flex justify-between items-center p-5 px-7">
            <div className="flex items-center gap-2 cursor-pointer">
                <img src={Logo} alt="logo" />
                <span className="text-2xl font-bold">Movie Time</span>
            </div>
            <Input type="text" placeholder="Search movies..." />
            <Button>Log In</Button>
        </div>
    );
};

export default Header;
