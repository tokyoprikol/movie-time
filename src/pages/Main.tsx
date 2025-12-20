import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching.js";

import MediaCardList from "../components/MediaCardList.tsx";

import { movieService } from "../API/movieService.ts";
import { genreService } from "../API/genreService.ts";
import { tvService } from "../API/tvService.ts";

import type { MediaItem, Genre } from "../types.ts";

const Main = () => {
    const [movies, setMovies] = useState<MediaItem[]>([]);
    const [tvShows, setTvShows] = useState<MediaItem[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    const [isMovieListLoading, movieError, fetchMovies] = useFetching(
        async () => {
            const data = await movieService.getPopularMovies();
            console.log("Movie data:", data);
            setMovies(data.results);
        },
    );

    const [isTvLoading, tvError, fetchTv] = useFetching(async () => {
        const data = await tvService.getPopularTv();
        console.log("TV data:", data);
        setTvShows(data.results);
    });

    const [isGenreLoading, genreError, fetchGenres] = useFetching(async () => {
        const data = await genreService.getGenres();
        console.log("Genre data:", data);
        setGenres(data.genres);
    });

    useEffect(() => {
        fetchMovies();
        fetchGenres();
        fetchTv();
    }, []);

    return (
        <div className="px-6">
            <MediaCardList
                title="Popular Movies"
                data={movies}
                isMovieListLoading={isMovieListLoading}
                movieError={movieError}
                genres={genres}
            />

            <MediaCardList
                title="Popular Tv Shows"
                data={tvShows}
                isMovieListLoading={isTvLoading}
                movieError={tvError}
                genres={genres}
            />
        </div>
    );
};

export default Main;
