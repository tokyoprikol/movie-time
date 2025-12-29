import ReviewItem from "./ReviewItem.tsx";
import type { Review } from "../types.ts";

interface ReviewListProps {
    reviews: Review[] | null;
}

const ReviewList = ({ reviews }: ReviewListProps) => {
    return (
        <div className="px-15 py-10">
            <span className="text-3xl font-semibold">Reviews</span>
            <div className="mt-10">
                {reviews?.map((review) => (
                    <ReviewItem key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};

export default ReviewList;
