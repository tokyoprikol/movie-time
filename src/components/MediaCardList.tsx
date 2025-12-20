import MediaCard from "./MediaCard.tsx";
import type { MediaItem, Genre } from "../types.ts";
import { Loader } from "lucide-react";

interface MediaCardListProps {
    title: string;
    data: MediaItem[];
    isMediaLoading: boolean;
    error: string;
    genres: Genre[];
}

const MediaCardList = ({
    title,
    data,
    isMediaLoading,
    error,
    genres,
}: MediaCardListProps) => {
    return isMediaLoading ? (
        <Loader
            className="m-auto mt-20 animate-spin text-neutral-200"
            size={100}
        />
    ) : error ? (
        <h1 className="text-center text-2xl font-bold text-red-500">
            Error. Please try again later.
        </h1>
    ) : !data.length ? (
        <h1 className="text-center text-2xl font-bold">
            There are no films right now
        </h1>
    ) : (
        <div className="mt-15">
            <h1 className="mb-8 text-4xl font-bold text-neutral-200">
                {title}
            </h1>
            <div className="grid grid-cols-4 gap-8">
                {data.map((dataItem) => (
                    <MediaCard
                        key={dataItem.id}
                        dataItem={dataItem}
                        genres={genres}
                    />
                ))}
            </div>
        </div>
    );
};

export default MediaCardList;
