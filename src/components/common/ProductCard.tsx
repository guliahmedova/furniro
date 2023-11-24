import { Link } from 'react-router-dom';
import { ProductTypes } from '../../models/productTypes';
import share from '../../assets/images/share.svg';
import compare from '../../assets/images/compare.svg';
import heart from '../../assets/images/whiteheart.svg';
import goldheart from '../../assets/images/goldheart.svg';
import { addToWishlist, removeFromWishlist } from '../../redux/features/wishlistSlice';
import { FC } from 'react';
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

  const handleFavBtnClick = () => {
    if (isLike) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <Link to={`/productDetail/${product?.id}`} className={`${gridClass === 'view' ? 'h-[30vh]' : 'h-full'} group cursor-pointer`}>
      <div className="relative overflow-hidden h-full">
        <img src={product?.ProductImages[0]} alt="" className='h-[301px] w-full object-cover' />
        <div className='absolute top-[24px] right-6'>
          {product?.IsNew ? (<span className='w-12 h-12 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium'>New</span>) : (
            <span className='w-12 h-12 rounded-full bg-[#E97171] flex items-center justify-center text-white font-medium'>-{product?.DiscountPercent}%</span>
          )}
        </div>
        <div className="absolute h-full w-full bg-[#3A3A3A]/70 flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
          <div>
            <button className='bg-white w-[202px] block mb-6 mx-auto opacity-100 text-[#B88E2F] font-bold text-[16px] leading-6 py-[12px]'>Add to cart</button>
            <div className='flex items-center gap-5 mt-[24px]'>
              <div className='flex items-center gap-1 font-semibold leading-6 text-white' onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}>
                <img src={share} alt="" /> <span>Share</span>
              </div>
              <div className='flex items-center gap-1 font-semibold leading-6 text-white' onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}>
                <img src={compare} alt="" /> <span>Compare</span>
              </div>
              <div className='flex items-center gap-1 font-semibold leading-6 text-white'
                onClick={(e) => {
                  handleFavBtnClick();
                  e.preventDefault();
                  e.stopPropagation();
                }}>
                <img className='w-4 h-4' src={isLike ? goldheart : heart} alt="" /> <span className={`${isLike ? 'text-[#B88E2F]' : ''}`}>{isLike ? "Liked" : "Like"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='p-[16px] pb-8 bg-[#F4F5F7]'>
          <h1 className='text-[#3A3A3A] font-bold text-xl leading-7 mb-2'>{product?.Title}</h1>
          <p className='text-[#898989] font-medium'>{product?.SubTitle}</p>

          <div className='mt-[8px] flex gap-4 justify-between items-center'>
            <span className='text-[#3A3A3A] font-bold text-xl'>Rp {Math.ceil(product?.SalePrice - ((product?.SalePrice * product?.DiscountPercent) / 100))}</span>
            <span className='text-[#B0B0B0] font-normal leading-6 line-through'>Rp {product?.SalePrice}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard