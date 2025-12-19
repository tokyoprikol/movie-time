import { CalendarDays } from "lucide-react";
import { getPoster } from "../utils/tmdb.ts";
import type { Movie } from "../types.ts";

interface MovieItemProps {
    movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
    return (
        <div className="overflow-hidden rounded-xl border-2 border-neutral-800 bg-neutral-800/40">
            <div className="relative overflow-hidden">
                <img
                    src={getPoster(movie.poster_path)}
                    alt="poster"
                    className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-50 blur-md"
                />
                <img
                    src={getPoster(movie.poster_path)}
                    alt="poster"
                    className="relative m-auto object-cover"
                />
            </div>
            <div className="p-4 text-neutral-300">
                <h3 className="text-center text-lg font-bold">{movie.title}</h3>
                <div className="flex items-center justify-between gap-4 py-2">
                    <div className="flex items-center gap-1">
                        <CalendarDays size={15} />
                        {movie.release_date.slice(0, 4)}
                    </div>
                    <div className="rounded-lg bg-neutral-700 px-2">Genre</div>
                </div>
                <p className="text-sm">{movie.overview.slice(0, 100)}...</p>
            </div>
        </div>
    );
};

export default MovieItem;
