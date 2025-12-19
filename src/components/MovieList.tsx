import MovieItem from "./MovieItem.tsx";
import type { Movie } from "../types.ts";

interface MovieListProps {
    title: string;
    movies: Movie[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
    return (
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
