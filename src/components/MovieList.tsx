import MovieItem from "./MovieItem.tsx";
import type { Movie } from "../types.ts";
import { Loader } from "lucide-react";

interface MovieListProps {
    title: string;
    movies: Movie[];
    isMovieListLoading: boolean;
    movieError: string;
}

const MovieList = ({
    title,
    movies,
    isMovieListLoading,
    movieError,
}: MovieListProps) => {
    return isMovieListLoading ? (
        <Loader
            className="m-auto mt-20 animate-spin text-neutral-200"
            size={100}
        />
    ) : movieError ? (
        <h1 className="text-center text-2xl font-bold text-red-500">
            Error. Please try again later.
        </h1>
    ) : !movies.length ? (
        <h1 className="text-center text-2xl font-bold">
            There are no films right now
        </h1>
    ) : (
        <div className="mt-15">
            <h1 className="mb-8 text-center text-4xl font-bold text-neutral-200">
                {title}
            </h1>
            <div className="grid grid-cols-4 gap-8">
                {movies.map((movie) => (
                    <MovieItem key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
