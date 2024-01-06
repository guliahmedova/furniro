import { useEffect, useMemo, useState, FC } from 'react';
import { useAppDispatch } from '../../redux/app/store';
import { addReview } from '../../redux/features/reviewSlice';

interface ReviewProps {
  productId: string | undefined
};

const Review: FC<ReviewProps> = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [hover, setHover] = useState(0);
  const dispatch = useAppDispatch();
  const userid = localStorage.getItem("userId");
  const userid_int = useMemo(() => {
    if (userid) {
      return parseInt(userid);
    }
  }, [userid]);

  const productId_Int = useMemo(() => {
    if (productId) {
      return parseInt(productId);
    }
  }, [productId])

  useEffect(() => {
    if (userid_int && productId_Int) {
      dispatch(addReview({
        productId: productId_Int,
        appUserId: userid_int,
        rate: rating,
        text: text
      }))
    }
  }, [dispatch, rating, text, productId_Int, userid_int]);

  return (
    <>
      <div className='flex gap-0 w-6/12 mx-auto justify-center mb-3'>
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;

          return (
            <label key={index} className=''>
              <input
                type="radio"
                name="rating"
                value={currentRating}
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

      <form className='flex items-center flex-col gap-2 justify-center'>
        <textarea placeholder='Add a comment' value={text} name='text' onChange={(e) => setText(e.target.value)} className='outline-none border resize-none rounded-lg p-2 w-6/12 text-black' />
        <button className='border-2 rounded-md p-2 bg-[#B88E2F] w-6/12 text-white'>Save</button>
      </form>
    </>
  )
}

export default Review