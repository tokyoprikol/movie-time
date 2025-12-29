import ActorCard from "./ActorCard.tsx";
import type { Cast } from "../types.ts";

interface ActorListProps {
    cast: Cast[] | null;
}

const ActorList = ({ cast }: ActorListProps) => {
    return (
        <div className="px-15 py-10">
            <span className="text-3xl font-semibold">Series Cast</span>
            <div className="custom-scrollbar mt-5 flex gap-5 overflow-x-auto scroll-smooth pb-4">
                {cast?.slice(0, 10).map((c) => (
                    <ActorCard c={c} key={c.id} />
                ))}
            </div>
        </div>
    );
};

export default ActorList;
