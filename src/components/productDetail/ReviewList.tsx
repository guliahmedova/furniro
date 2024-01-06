import { FC } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ReviewType } from "../../models/ReviewType";
import { useAppDispatch } from "../../redux/app/store";
import { deletReviewById } from "../../redux/features/reviewSlice";
const MySwal = withReactContent(Swal);

interface ReviewListProps {
    allRewiews: ReviewType[]
};

const ReviewList: FC<ReviewListProps> = ({ allRewiews }) => {
    const dispatch = useAppDispatch();

    const deleteReviewByIdClickHandler = (reviewId: number) => {
        dispatch(deletReviewById(reviewId)).then((confirm) => {
            console.log(confirm);
            if (confirm?.payload?.isSuccess) {
                MySwal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your review has been deleted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    return (
        <div className='w-6/12 mx-auto my-6 p-4 overflow-y-scroll h-[50vh] flex flex-col gap-5 border border-blue-200'>
            {allRewiews?.map((review, index) => (
                <div key={review.id} className="border p-4">
                    <div className="flex items-center gap-2">
                        <span className="w-10 h-10 bg-red-200 block rounded-full"></span>
                        <span className="text-sm capitalize font-medium">anonymous user{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-4 justify-between mt-5">
                        <span className="text-lg font-medium text-black">{review.text}</span>
                        <span className="border p-1 rounded-full w-10 h-10 bg-yellow-100 flex items-center justify-center select-none">{review.rate}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-5 justify-end">
                        <button className="bg-yellow-500 text-white px-5 py-1 font-medium">Edit</button>
                        <button onClick={() => {
                            if (review.id) {
                                deleteReviewByIdClickHandler(review.id);
                            }
                        }} className="bg-red-500 text-white px-5 py-1 font-medium">Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ReviewList