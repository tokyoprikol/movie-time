import { getPoster } from "../utils/tmdb.ts";
import type { ContentRating, MediaItem } from "../types.ts";

interface DetailsProps {
    media: MediaItem;
    usContRat: ContentRating | undefined;
}

const SingleMediaMainDetails = ({ media, usContRat }: DetailsProps) => {
    return (
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
                <div>
                    <div className="text-4xl">
                        <span className="font-semibold">
                            {media.title || media.name}
                        </span>
                        <span className="ml-2 text-neutral-300">
                            (
                            {media.first_air_date?.slice(0, 4) ||
                                media.release_date?.slice(0, 4)}
                            )
                        </span>
                    </div>
                    <div className="mt-2 flex items-center">
                        <span className="rounded-sm border border-neutral-400 p-1 text-sm text-neutral-400">
                            {usContRat?.rating}
                        </span>
                        <div className="ml-2">
                            {media.genres?.map((g) => g.name).join(", ")}
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

export default SingleMediaMainDetails;
