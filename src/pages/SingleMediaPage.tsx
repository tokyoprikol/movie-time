import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";
import { tvService } from "../API/tvService";
import { movieService } from "../API/movieService";
import type { MediaItem, ContentRating } from "../types";
import { getPoster } from "../utils/tmdb";
import { Loader } from "lucide-react";

const SingleMediaPage = () => {
    const { mediaType, id } = useParams();
    const mediaId = Number(id?.split("-")[0]);

    const [media, setMedia] = useState<MediaItem | null>(null);

    const [isMediaLoading, mediaError, fetchMedia] = useFetching(
        async (id: number) => {
            let data;

            switch (mediaType) {
                case "tv":
                    data = await tvService.getTvById(id);
                    break;
                case "movie":
                    data = await movieService.getMovieById(id);
                    break;
                default:
                    console.warn("Unknown media type", mediaType);
                    return;
            }

            console.log(data);
            setMedia(data);
        },
    );

    const usContRat: ContentRating | undefined =
        media?.content_ratings.results.find((r) => r.iso_3166_1 === "US");

    useEffect(() => {
        if (mediaId) {
            fetchMedia(mediaId);
        }
    }, [mediaId, mediaType]);

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
        <div className="relative w-full overflow-hidden">
            <img
                src={getPoster(media.backdrop_path, "original")}
                alt="Backdrop"
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/90" />

            <div className="relative flex items-start gap-8 px-15 py-10 text-white">
                <img
                    className="w-80 shadow-2xl"
                    src={getPoster(media.poster_path, "original")}
                    alt="poster"
                />
                <div className="">
                    <div className="text-4xl">
                        <span className="font-semibold">
                            {media.title || media.name}
                        </span>
                        <span className="ml-2 text-neutral-300">
                            ({media.first_air_date?.slice(0, 4)})
                        </span>
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="rounded-sm border border-neutral-400 p-1 text-sm text-neutral-400">
                            {usContRat?.rating}
                        </span>
                        <div className="ml-2">
                            {media.genres?.map((g, i) => (
                                <span key={g.id}>
                                    {g.name}
                                    {i !== media.genres.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 text-neutral-300 italic">
                        {media.tagline}
                    </div>
                    <div className="mt-10">
                        <div className="mb-2 font-semibold">Overview</div>
                        <span className="text-sm text-neutral-200">
                            {media.overview}
                        </span>
                    </div>
                    <div className="mt-10">
                        <span>Created By:</span>
                        <div className="mt-4 flex gap-5">
                            {media.created_by?.map((c) => (
                                <div
                                    key={c.id}
                                    className="cursor-pointer border-b font-semibold"
                                >
                                    {c.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMediaPage;
