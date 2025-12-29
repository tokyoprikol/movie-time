import { getPoster } from "../utils/tmdb";

const ActorCard = ({ c }: any) => {
    return (
        <div className="scr max-w-40 shrink-0 cursor-pointer rounded-lg bg-neutral-800 shadow-xl">
            <img
                className="h-50 w-40 rounded-t-lg object-cover"
                src={getPoster(c.profile_path, "original")}
                alt="Poster"
            />
            <div className="flex flex-col p-3 text-sm">
                <span className="font-semibold">{c.name}</span>
                <span className="text-neutral-300">{c.roles[0].character}</span>
                <span className="text-neutral-400">
                    {c.roles[0].episode_count} Episodes
                </span>
            </div>
        </div>
    );
};

export default ActorCard;
