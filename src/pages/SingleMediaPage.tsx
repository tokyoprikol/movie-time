import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetching } from "../hooks/useFetching";

import { tvService } from "../API/tvService";
import { movieService } from "../API/movieService";

import ErrorMes from "../components/ErrorMes";
import ReviewList from "../components/ReviewList.tsx";
import ActorList from "../components/ActorList.tsx";
import SingleMediaMainDetails from "../components/SingleMediaMainDetails.tsx";

import { Loader } from "lucide-react";
import type { MediaItem, ContentRating, Cast, Review } from "../types";

const SingleMediaPage = () => {
    const { mediaType, id } = useParams();
    const mediaId = Number(id?.split("-")[0]);

    const [media, setMedia] = useState<MediaItem | null>(null);
    const [cast, setCast] = useState<Cast[] | null>(null);
    const [reviews, setReviews] = useState<Review[] | null>(null);

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
            setCast(data.aggregate_credits.cast);
            setReviews(data.reviews.results);
        },
    );

    const usContRat: ContentRating | undefined =
        media?.content_ratings?.results.find((r) => r.iso_3166_1 === "US");

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
        <ErrorMes />
    ) : !media ? (
        <h1>Media not found</h1>
    ) : (
        <div>
            <SingleMediaMainDetails media={media} usContRat={usContRat} />
            <ActorList cast={cast} />
            <ReviewList reviews={reviews} />
        </div>
    );
};

export default SingleMediaPage;
