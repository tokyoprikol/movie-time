import { useEffect, useState } from "react";
import { useFetching } from "../hooks/useFetching.js";

import MediaCardList from "../components/MediaCardList.tsx";

import { genreService } from "../API/genreService.ts";
import { tvService } from "../API/tvService.ts";

import type { MediaItem, Genre } from "../types.ts";

const Main = () => {
    const [tvShows, setTvShows] = useState<MediaItem[]>([]);

    const [isTvLoading, tvError, fetchTv] = useFetching(async () => {
        const data = await tvService.getPopularTv();
        console.log("TV data:", data);
        setTvShows(data.results);
    });

    useEffect(() => {
        fetchMovies();
        fetchGenres();
        fetchTv();
    }, []);

    return (
        <div className="px-6">
            <MediaCardList
                title="Popular Tv Shows"
                data={tvShows}
                isMediaLoading={isTvLoading}
                error={tvError}
                genres={genres}
            />
        </div>
    );
};

export default Main;
