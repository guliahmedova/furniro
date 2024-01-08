import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DescriptionType } from '../../models/DescriptionType';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getProductDescriptionById } from '../../redux/features/productDetailSlice';
import { getReviewsByProductId } from '../../redux/features/reviewSlice';
import Review from './Review';
import ReviewList from './ReviewList';

const DetailTabbedNavigation = () => {
  const [tabIndex, setTabIndex] = useState(3);
  const toggleTabs = (index: number) => {
    setTabIndex(index);
  };

  const [showMore, setShowMore] = useState(8);

  const userid = localStorage.getItem("userId");
  const userid_int = useMemo(() => {
    if (userid) {
      return parseInt(userid);
    }
  }, [userid]);

  const productDescription: DescriptionType = useSelector((state: RootState) => state.productDetail.productDescriptions);
  const dispatch = useAppDispatch();
  const { productId } = useParams();

  const productid_int = useMemo(() => {
    if (productId) {
      return parseInt(productId);
    }
  }, [productId]);

  useEffect(() => {
    if (productid_int) {
      dispatch(getProductDescriptionById(productid_int));
    }
  }, [dispatch, productid_int]);

  const allRewiews = useSelector((state: RootState) => state.review.reviews);

  useEffect(() => {
    if (productid_int) {
      dispatch(getReviewsByProductId({
        productId: productid_int,
        take: showMore
      }));
    }
  }, [dispatch, productid_int, showMore]);

  const totalReviewCount = useSelector((state: RootState) => state.review.totalReviewCount);

  return (
    <section className="mt-[69px] pt-[46px] pb-[61px] border-t border-b border-[#D9D9D9]">
      <div className='lg:max-w-[1239px] mx-auto lg:px-0 px-3'>
        <div className='flex lg:gap-14 gap-3 lg:justify-center justify-between mb-[37px]'>
          <span onClick={() => toggleTabs(1)} className={`lg:text-2xl text-center ease-in-out duration-300 text-sm ${tabIndex === 1 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Description</span>
          <span onClick={() => toggleTabs(2)} className={`lg:text-2xl text-center ease-in-out duration-300 text-sm flex-shrink-0 ${tabIndex === 2 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Additional Information</span>
          <span onClick={() => toggleTabs(3)} className={`lg:text-2xl text-center ease-in-out duration-300 text-sm flex-shrink-0 ${tabIndex === 3 ? 'text-black font-medium select-none' : 'text-[#9F9F9F] font-normal cursor-pointer'}`}>Reviews [{totalReviewCount}]</span>
        </div>

        <div className={`${tabIndex === 1 ? 'block' : 'hidden'}`}>
          <p className='max-w-[1026px] mx-auto text-[#9F9F9F] font-normal tracking-wider'>
            <span className='mb-[30px] block'>
              {productDescription?.introduction}
            </span>
          </p>
          <div className='flex lg:flex-row flex-col gap-7 mt-[36px]'>
            {productDescription?.imageFiles && productDescription?.imageFiles.length > 0 && (
              productDescription?.imageFiles.map((item, index) => (
                <div key={index} className='lg:w-[605px] h-[348px] rounded-lg bg-[#F9F1E7]'><img className='w-full h-full object-cover rounded-lg' src={item} alt="product-img1" /></div>
              ))
            )}
          </div>
        </div>

        <div className={`max-w-[1026px] mx-auto text-[#9F9F9F] font-normal tracking-wider ${tabIndex === 2 ? 'block' : 'hidden'}`}>
          <p>{productDescription?.introduction}</p>
        </div>

        <div className={`max-w-[1026px] mx-auto text-[#9F9F9F] font-normal tracking-wider flex flex-col ${tabIndex === 3 ? 'block' : 'hidden'}`}>
          <Review productId={productid_int} userid_int={userid_int} showMore={showMore} />
          <ReviewList allRewiews={allRewiews} totalReviewCount={totalReviewCount}
            appUserId={userid_int}
            productId={productid_int}
            setShowMore={setShowMore}
            showMore={showMore} />
        </div>

      </div>
    </section>
  )
}

export default DetailTabbedNavigation