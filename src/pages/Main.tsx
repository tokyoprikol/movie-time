import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching.js";

import MovieList from "../components/MovieList.js";
import { MovieService } from "../API/MovieService.js";
import type { Movie, Genre } from "../types.js";

const Main = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    const [isMovieListLoading, movieError, fetchMovies] = useFetching(
        async () => {
            const data = await MovieService.getPopularMovies();
            console.log(data);
            setMovies(data.results);
        },
    );

    const [isGenreLoading, genreError, fetchGenres] = useFetching(async () => {
        const data = await MovieService.getGenres();
        console.log(data);
        setGenres(data.genres);
    });

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, []);

    return (
        <div className="px-6">
            <MovieList
                title="Popular"
                movies={movies}
                isMovieListLoading={isMovieListLoading}
                movieError={movieError}
                genres={genres}
            />
        </div>
    );
};

export default Main;
