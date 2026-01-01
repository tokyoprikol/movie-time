import { UserRound, Star } from "lucide-react";
import dayjs from "dayjs";
import type { Review } from "../types.ts";
import { getPoster } from "../utils/tmdb.ts";
import { useState } from "react";

interface ReviewItemProps {
    review: Review;
}

const ReviewItem = ({ review }: ReviewItemProps) => {
    const [isCommentOpen, setIsCommentOpen] = useState(false);
    const shouldTruncate = review.content.length > 350;

    return (
        <div className="mb-10 rounded-2xl bg-neutral-800 p-5 shadow-2xl">
            <div className="mb-3 flex items-center">
                {review.author_details.avatar_path === null ? (
                    <div className="rounded-full bg-neutral-50 p-1">
                        <UserRound size={50} color="#000000" />
                    </div>
                ) : (
                    <img
                        className="h-15 w-15 rounded-full object-cover"
                        src={getPoster(
                            review.author_details.avatar_path,
                            "original",
                        )}
                        alt="logo"
                    />
                )}

                <div className="ml-3">
                    <span className="font-semibold">{review.author}</span>
                    <div className="flex">
                        <div className="flex items-center gap-2 rounded-md bg-neutral-900 px-2">
                            {review.author_details.rating || "No rating"}
                            <Star size={17} color="#ffd000" fill="#ffd000" />
                        </div>
                        <span className="ml-3">
                            Written on{" "}
                            {dayjs(review.created_at).format("MMMM D, YYYY")}
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-sm">
                <div className={shouldTruncate && !isCommentOpen ? 'line-clamp-3' : ''}>
                    {review.content}
                </div>
                {shouldTruncate && (
                    <button
                        className='underline cursor-pointer'
                        onClick={() => setIsCommentOpen(!isCommentOpen)}>
                        {isCommentOpen ? 'close' : 'read the rest.'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ReviewItem;
