import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching";

import MediaCardList from "../../components/MediaCardList";

import { movieService } from "../../API/movieService.ts";
import { genreService } from "../../API/genreService.ts";
import type { MediaItem, Genre } from "../../types";

const MovieTopRatedPage = () => {
    const [movies, setMovies] = useState<MediaItem[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    const [isMovieListLoading, movieError, fetchMovies] = useFetching(
        async () => {
            const data = await movieService.getTopRatedMovies();
            console.log("Movie data:", data);
            setMovies(data.results);
        },
    );

    const [isGenreLoading, genreError, fetchGenres] = useFetching(async () => {
        const data = await genreService.getGenres();
        console.log("Genre data:", data);
        setGenres(data.genres);
    });

    useEffect(() => {
        fetchMovies();
        fetchGenres();
    }, []);

    return (
        <MediaCardList
            title="Top Rated Movies"
            data={movies}
            isMediaLoading={isMovieListLoading}
            error={movieError}
            genres={genres}
        />
    );
};

export default MovieTopRatedPage;
