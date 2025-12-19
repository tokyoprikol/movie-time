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
            <MovieList
                title="Popular"
                movies={movies}
                isMovieListLoading={isMovieListLoading}
                movieError={movieError}
            />
        </div>
    );
};

export default Main;
