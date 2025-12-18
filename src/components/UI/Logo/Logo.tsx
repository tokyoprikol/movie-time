import LogoImg from "../../../assets/imgs/film.svg";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 cursor-pointer justify-self-right">
            <img src={LogoImg} alt="logo" />
            <span className="text-2xl font-bold">Movie Time</span>
        </div>
    );
};

export default Logo;
