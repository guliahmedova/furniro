import { FC, useState } from "react"
import closeIcon from '../../assets/images/closeModal.svg';
import { getReviewsByProductId, updateReview } from "../../redux/features/reviewSlice";
import { useAppDispatch } from "../../redux/app/store";

interface ReviewEditModalProps {
    showEditModal: boolean,
    setShowEditModal: (showmodal: boolean) => void,
    rate: number,
    textvalue: string,
    reviewId: number,
    productId: number,
    appUserId: number,
    showMore: number
}
const ReviewEditModal: FC<ReviewEditModalProps> = ({ showEditModal, setShowEditModal, rate, textvalue, reviewId, productId, appUserId, showMore}) => {
    const [rating, setRating] = useState(rate);
    const [text, setText] = useState(textvalue);
    const [hover, setHover] = useState(0);
    const dispatch = useAppDispatch();

    const editReviewBtnHandler = () => {
        if (reviewId && appUserId && productId) {
            dispatch(updateReview({
                id: reviewId,
                productId: productId,
                appUserId: appUserId,
                rate: rating,
                text: text
            })).then(() => {
                setShowEditModal(false);
                document.body.style.overflow = 'unset';
                dispatch(getReviewsByProductId({
                    productId: productId,
                    take: showMore
                }))
            })
        }
    };

    return (
        <div className={`top-0 left-0 flex justify-center items-center z-40 bg-[#3A3A3A]/60 h-screen w-full ${showEditModal ? 'fixed' : 'hidden'}`}>
            <div className="bg-gray-100 w-6/12 h-auto p-5">
                <div className="flex items-center justify-between border-b pb-3 px-1 py-5">
                    <span className="font-bold text-xl text-left px-5 block w-10/12">Edit Review</span>
                    <button className="w-1/12 flex justify-center border-4 p-1 mr-5"
                        onClick={() => {
                            if (setShowEditModal) {
                                setShowEditModal(false);
                                document.body.style.overflow = 'unset';
                            }
                        }}><img src={closeIcon} alt="" /></button>
                </div>

                <div className='flex gap-0 w-6/12 mx-auto justify-center mb-3'>
                    {[...Array(5)].map((_, index) => {
                        const currentRating = index + 1;

                        return (
                            <label key={index + 4} className=''>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={rate}
                                    onChange={() => setRating(currentRating)}
                                    className='hidden w-10 h-10'
                                />
                                <span
                                    className="cursor-pointer m-1 block text-3xl"
                                    style={{
                                        color:
                                            currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                                    }}
                                    onMouseEnter={() => setHover(currentRating)}
                                    onMouseLeave={() => setHover(0)}
                                >
                                    &#9733;
                                </span>
                            </label>
                        );
                    })}
                </div>

                <form className='flex items-center flex-col gap-2 justify-center' onSubmit={(e) => e.preventDefault()}>
                    <textarea placeholder='Add a comment' value={text} name='text' onChange={(e) => setText(e.target.value)} className='outline-none border resize-none rounded-lg p-2 w-6/12 text-black' />
                    <button type='submit' onClick={editReviewBtnHandler} className='border-2 rounded-md p-2 bg-[#B88E2F] w-6/12 text-white'>Edit</button>
                </form>
            </div>
        </div>
    )
}

export default ReviewEditModal