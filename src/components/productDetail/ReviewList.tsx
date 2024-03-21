import moment from 'moment';
import { FC, useState } from "react";
import { ReviewResponseBodyType } from "../../models/ReviewResponseBodyType";
import { useAppDispatch } from "../../redux/app/store";
import { deletReviewById, getReviewsByProductId } from "../../redux/features/reviewSlice";
import ReviewEditModal from "./ReviewEditModal";

interface ReviewListProps {
    allRewiews: ReviewResponseBodyType[],
    totalReviewCount: number,
    setShowMore: (showMore: number) => void,
    showMore: number,
    productId: number | undefined,
    appUserId: number | undefined
};

const ReviewList: FC<ReviewListProps> = ({ allRewiews, totalReviewCount, setShowMore, showMore, appUserId, productId }) => {
    const dispatch = useAppDispatch();
    const [showEditModal, setShowEditModal] = useState(false);
    const [reviewId, setReviewId] = useState(0);

    const deleteReviewByIdClickHandler = (reviewId: number) => {
        if (reviewId && productId && appUserId) {
            dispatch(deletReviewById({
                id: reviewId,
                productId: productId,
                appUserId: appUserId
            })).then(() => {
                dispatch(getReviewsByProductId({
                    productId: productId,
                    take: showMore
                }))
            })
        }
    };

    const editReviewBtnHandler = (reviewId: number) => {
        document.body.style.overflow = 'hidden';
        setReviewId(reviewId);
        setShowEditModal(true);
    };

    const handleShowMoreClick = () => {
        if (totalReviewCount > showMore && setShowMore) {
            setShowMore(showMore + 8);
        }
    };

    return (
        <div className='w-6/12 mx-auto my-6 p-4 overflow-y-scroll h-[50vh] flex flex-col gap-5 border border-blue-200 | reviewList'>
            {
                totalReviewCount > 0 ? (
                    allRewiews?.map((review) => (
                        <div key={review.id}>
                            <div className="border p-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm capitalize font-bold">{review.userName}</span>
                                </div>
                                <div className="flex items-center gap-4 justify-between mt-5">
                                    <span className="text-md w-10/12 font-medium text-black">{review.text}</span>
                                    <span className="border p-1 rounded-full w-10 h-10 bg-yellow-100 flex items-center justify-center select-none">
                                        {review.rate}
                                    </span>
                                </div>
                                <div className={`items-center gap-3 mt-5 justify-end ${review.appUserId === appUserId ? 'flex' : 'hidden'}`}>
                                    <span className="text-sm text-gray-500 font-medium  w-full">{moment(review.createdAt).add(10, 'days').calendar()}</span>
                                    <button className="bg-yellow-500 text-white px-5 py-1 font-medium"
                                        onClick={() => editReviewBtnHandler(review.id)}>Edit</button>
                                    <button onClick={() => {
                                        if (review.id) {
                                            deleteReviewByIdClickHandler(review.id);
                                        }
                                    }} className="bg-red-500 text-white px-5 py-1 font-medium">Delete</button>
                                </div>
                            </div>

                            <ReviewEditModal
                                key={`modal-${review.id}`}
                                showEditModal={review.id === reviewId ? showEditModal : false}
                                setShowEditModal={setShowEditModal}
                                rate={review.rate}
                                textvalue={review.text}
                                showMore={showMore}
                                reviewId={review.id}
                                productId={review.productId}
                                appUserId={review.appUserId}
                            />
                        </div>
                    ))
                ) : (
                    <div className="py-28 flex justify-center items-center flex-col gap-3">
                        <span className="text-red-600 font-bold text-2xl">There are no comments yet.</span>
                    </div>
                )
            }

            {(totalReviewCount > 0 && showMore > 4) && (
                <button
                    className="mt-[32px] border-2 py-[12px] block w-[245px] mx-auto border-[#B88E2F] text-[#B88E2F] font-bold text-[16px] leading-6"
                    type="button"
                    onClick={handleShowMoreClick}>
                    Show More
                </button>
            )}
        </div>
    )
}

export default ReviewList