import { Link } from 'react-router-dom';
import prs1 from '../../assets/images/prs1.svg';
import { ProductTypes } from '../../models/productTypes';
import share from '../../assets/images/share.svg';
import compare from '../../assets/images/compare.svg';
import heart from '../../assets/images/whiteheart.svg';
import goldheart from '../../assets/images/goldheart.svg';
import { addToWishlist } from '../../redux/features/wishlistSlice';
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/app/store';

interface ProductCardProps {
  product: ProductTypes;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const [favBtnActive, setFavBtnActive] = useState(false);

  return (
    <Link to={`/productDetail/${product?.id}`} className="h-full group cursor-pointer">
      <div className="relative overflow-hidden h-full">
        <img src={prs1} alt="" className='h-auto w-full object-cover' />
        <div className='absolute top-[24px] right-6'>
          {product?.isNew ? (<span className='w-12 h-12 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium'>New</span>) : (
            <span className='w-12 h-12 rounded-full bg-[#E97171] flex items-center justify-center text-white font-medium'>-{product?.discount}%</span>
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
                  dispatch(addToWishlist(product));
                  setFavBtnActive((prevState) => !prevState);
                  e.preventDefault();
                  e.stopPropagation();
                }}>
                <img className='w-4 h-4' src={favBtnActive ? goldheart : heart} alt="" /> <span className={`${favBtnActive ? 'text-[#B88E2F]' : ''}`}>Like</span>
              </div>
            </div>
          </div>
        </div>

        <div className='p-[16px] pb-8 bg-[#F4F5F7]'>
          <h1 className='text-[#3A3A3A] font-bold text-xl leading-7 mb-2'>{product?.title}</h1>
          <p className='text-[#898989] font-medium'>{product?.subTitle}</p>

          <div className='mt-[8px] flex gap-4 justify-between items-center'>
            <span className='text-[#3A3A3A] font-bold text-xl'>Rp {Math.ceil(product?.price - ((product?.price * product?.discount) / 100))}</span>
            <span className='text-[#B0B0B0] font-normal leading-6 line-through'>Rp {product?.price}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard