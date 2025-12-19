import LogoImg from "../../../assets/imgs/film.svg";

const Logo = () => {
    return (
        <div className="justify-self-right flex cursor-pointer items-center gap-2">
            <img src={LogoImg} alt="logo" />
            <span className="text-2xl font-bold">Movie Time</span>
        </div>
    );
};

export default Logo;
