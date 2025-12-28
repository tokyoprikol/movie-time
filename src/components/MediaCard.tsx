import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { getPoster } from "../utils/tmdb.ts";
import type { Genre, MediaItem } from "../types.ts";
import { useNavigate } from "react-router";

interface MediaCardProps {
    dataItem: MediaItem;
    genres: Genre[];
}

const MediaCard = ({ dataItem, genres }: MediaCardProps) => {
    const [movieGenres, setMovieGenres] = useState<Genre[]>([]);
    const router = useNavigate();

    const handleNavigate = () => {
        const url = dataItem.title ? "/movie" : "/tv";
        const title = dataItem.title || dataItem.name;
        router(
            `${url}/${dataItem.id}-${title
                ?.toLowerCase()
                .trim()
                .replace(/[^a-zа-яё0-9\s]/gi, "")
                .replace(/\s+/g, "-")}`,
        );
    };

    useEffect(() => {
        if (!dataItem.genre_ids || !genres.length) {
            setMovieGenres([]);
            return;
        }

        const matched = genres.find((g) => dataItem.genre_ids.includes(g.id));
        setMovieGenres(matched ? [matched] : []);
    }, []);

    return (
        <div className="overflow-hidden rounded-xl border-2 border-neutral-800 bg-neutral-800/40">
            <div
                className="relative cursor-pointer overflow-hidden"
                onClick={() => handleNavigate()}
            >
                <img
                    src={getPoster(dataItem.poster_path)}
                    alt="poster"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-50 blur-md"
                />
                <img
                    src={getPoster(dataItem.poster_path, "original")}
                    alt="poster"
                    className="relative m-auto w-60 object-cover"
                />
            </div>
            <div className="p-4 text-neutral-300">
                <h3 className="text-center text-lg font-bold">
                    {dataItem.title || dataItem.name}
                </h3>
                <div className="flex items-center justify-between gap-4 py-2">
                    <div className="flex items-center gap-1">
                        <CalendarDays size={15} />
                        {dataItem.release_date?.slice(0, 4) ||
                            dataItem.first_air_date?.slice(0, 4)}
                    </div>
                    <div className="flex items-center justify-center gap-1 rounded-lg bg-neutral-700 px-2">
                        {movieGenres.map((g) => (
                            <span key={g.id} className="text-xs">
                                {g.name}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="text-sm">{dataItem.overview?.slice(0, 100)}...</p>
            </div>
        </div>
    );
};

export default MediaCard;
