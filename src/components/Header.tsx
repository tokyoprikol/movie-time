import Logo from "./UI/Logo/Logo";
import DropdownMenu from "./UI/DropdownMenu";
import Input from "./UI/input/Input";
import Button from "./UI/button/Button";
import { moviesMenu, tvMenu } from "./routes/menu-routes.ts";

const Header = () => {
    return (
        <div className="sticky top-0 z-50 flex items-center justify-between p-5 px-7 shadow-md backdrop-blur-md">
            <div className="flex items-center justify-between gap-8">
                <Logo />
                <DropdownMenu title={"Movies"} menu={moviesMenu} />
                <DropdownMenu title={"TV Shows"} menu={tvMenu} />
            </div>
            <Input type="text" placeholder="Search movies..." />
            <Button>Log In</Button>
        </div>
    );
};

export default Header;
