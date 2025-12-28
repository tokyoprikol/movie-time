import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import { tvService } from "../API/tvService";
import { movieService } from "../API/movieService";
import type { MediaItem } from "../types";
import { getPoster } from "../utils/tmdb";
import { Loader } from "lucide-react";

const SingleMediaPage = () => {
    const { mediaType, id } = useParams();
    const mediaId = Number(id?.split("-")[0]);

    const [media, setMedia] = useState<MediaItem | null>(null);
    const [isMediaLoading, mediaError, fetchMedia] = useFetching(
        async (id: number) => {
            let data;
            if (mediaType === "tv") {
                data = await tvService.getTvById(id);
                console.log(data);
            }
            if (mediaType === "movie") {
                data = await movieService.getMovieById(id);
                console.log(data);
            }
            setMedia(data);
        },
    );

    useEffect(() => {
        fetchMedia(mediaId);
    }, [id]);

    return isMediaLoading ? (
        <Loader
            className="m-auto mt-20 animate-spin text-neutral-200"
            size={100}
        />
    ) : mediaError ? (
        <h1 className="text-center text-2xl font-bold text-red-500">
            Error. Please try again later.
        </h1>
    ) : !media ? (
        <h1>Media not found</h1>
    ) : (
        <div>
            <div>
                <div
                    style={{ backgroundImage: getPoster(media.backdrop_path) }}
                ></div>
            </div>
        </div>
    );
};

export default SingleMediaPage;
