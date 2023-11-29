import { Link } from 'react-router-dom';
import { ProductTypes } from '../../models/productTypes';
import share from '../../assets/images/share.svg';
import compare from '../../assets/images/compare.svg';
import heart from '../../assets/images/whiteheart.svg';
import goldheart from '../../assets/images/goldheart.svg';
import { addToWishlist, removeFromWishlist } from '../../redux/features/wishlistSlice';
import React, { FC, memo, useCallback } from 'react';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { useSelector } from 'react-redux';

interface ProductCardProps {
  product: ProductTypes;
  gridClass?: string
};

const ProductCard: FC<ProductCardProps> = ({ product, gridClass }) => {
  const dispatch = useAppDispatch();

  const isLike = useSelector((state: RootState) => (
    state.wishlist.product.some((favItem) => favItem?.id === product?.id)
  ));

  const handleFavBtnClick = useCallback(() => {
    if (isLike) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  }, [dispatch, isLike, product]);

  const handleBtnsClick = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  return (
    <Link to={`/productDetail/${product?.id}`} className={`${gridClass === 'view' ? 'h-[30vh]' : 'h-full'} cursor-pointer`}>
      <div className="relative overflow-hidden h-full">
        <img src={product?.ProductImages[0]} alt="" className='h-[301px] w-full object-cover' />
        <div className='absolute top-[24px] right-6'>
          {product?.IsNew ? (<span className='w-12 h-12 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium'>New</span>) : (
            <span className='w-12 h-12 rounded-full flex items-center justify-center bg-[#E97171] text-white font-medium'>-{product?.DiscountPercent}%</span>)}
        </div>
        <div className="absolute h-full w-full bg-[#3A3A3A]/70 flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
          <div>
            <div className='bg-white w-[202px] block mb-6 text-center mx-auto opacity-100 text-[#B88E2F] font-bold text-[16px] leading-6 py-[12px]' onClick={handleBtnsClick}>Add to cart</div>
            <div className='flex items-center gap-3 mt-[24px] px-3'>
              <div className='flex items-center font-semibold leading-6 text-white' onClick={handleBtnsClick}>
                <img src={share} alt="share-icon" /> <span>Share</span>
              </div>
              <div className='flex items-center font-semibold leading-6 text-white' onClick={handleBtnsClick}>
                <img src={compare} alt="compare-icon" /> <span>Compare</span>
              </div>
              <div className='flex items-center font-semibold leading-6 text-white'
                onClick={(e) => {
                  handleFavBtnClick();
                  e.preventDefault();
                  e.stopPropagation();
                }}>
                <img className='w-4 h-4' src={isLike ? goldheart : heart} alt="heart-icon" /> <span className={`${isLike ? 'text-[#B88E2F]' : ''}`}>{isLike ? "Liked" : "Like"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='h-full pb-7 px-4 pt-4 bg-[#F4F5F7]'>
          <h1 className='text-[#3A3A3A] font-bold text-xl leading-7 mb-2'>{product?.Title}</h1>
          <p className='text-[#898989] lg:text-base text-sm font-medium'>{product?.SubTitle}</p>

          <div className='mt-[8px] flex gap-4 justify-between items-center'>
            <span className='text-[#3A3A3A] font-bold lg:text-xl'>Rp {Math.ceil(product?.SalePrice - ((product?.SalePrice * product?.DiscountPercent) / 100))}</span>
            <span className='text-[#B0B0B0] font-normal lg:leading-6 line-through'>Rp {product?.SalePrice}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default memo(ProductCard);