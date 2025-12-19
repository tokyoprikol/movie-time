import { useEffect, useState } from "react";
import { MovieService } from "../API/MovieService.js";
import MovieList from "../components/MovieList.js";
import { useFetching } from "../hooks/useFetching.js";
import type { Movie } from "../types.js";
import { Loader } from "lucide-react";

const Main = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isMovieListLoading, movieError, fetchMovies] = useFetching(
        async () => {
            const data = await MovieService.getPopularMovies();
            console.log(data);
            setMovies(data.results);
        },
    );

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="px-6">
            {isMovieListLoading ? (
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
                <MovieList title="Popular" movies={movies} />
            )}
        </div>
    );
};

export default Main;
