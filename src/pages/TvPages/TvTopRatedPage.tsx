import { useEffect, useState } from "react";
import { useFetching } from "../../hooks/useFetching.js";

import MediaCardList from "../../components/MediaCardList.tsx";

import { genreService } from "../../API/genreService.ts";
import { tvService } from "../../API/tvService.ts";

import type { MediaItem, Genre } from "../../types.ts";

const TvTopRatedPage = () => {
    const [tvShows, setTvShows] = useState<MediaItem[]>([]);
    const [genres, setGenres] = useState<Genre[]>([]);

    const [isTvLoading, tvError, fetchTv] = useFetching(async () => {
        const data = await tvService.getTopRatedTv();
        console.log("TV data:", data);
        setTvShows(data.results);
    });

    const [isGenreLoading, genreError, fetchGenres] = useFetching(async () => {
        const data = await genreService.getGenres();
        console.log("Genre data:", data);
        setGenres(data.genres);
    });

    useEffect(() => {
        fetchTv();
        fetchGenres();
    }, []);

    return (
        <div className="px-6">
            <MediaCardList
                title="Top Rated TV Shows"
                data={tvShows}
                isMediaLoading={isTvLoading}
                error={tvError}
                genres={genres}
            />
        </div>
    );
};

export default TvTopRatedPage;
