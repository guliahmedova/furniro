import React, { FC, memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import compare from '../../assets/images/compare.svg';
import errorImg from '../../assets/images/errorImage.png';
import goldheart from '../../assets/images/goldheart.svg';
import share from '../../assets/images/share.svg';
import shopIcon from '../../assets/images/shoppingCart.svg';
import heart from '../../assets/images/whiteheart.svg';
import { ProductTypes } from '../../models/productTypes';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { getProductById, getProductIDByCLick } from '../../redux/features/productSlice';
import { addToWishlist, removeFromWishlist } from '../../redux/features/wishlistSlice';
import AddToCartModal from './AddToCartModal';

interface ProductCardProps {
  product: ProductTypes;
  gridClass?: string
};

const ProductCard: FC<ProductCardProps> = ({ product, gridClass }) => {
  const dispatch = useAppDispatch();
  const [isModalOpan, setIsModalOpen] = useState(false);
  const productById: ProductTypes = useSelector((state: RootState) => state?.product?.product);
  const [activeColor, setActiveColor] = useState("");
  const [activeSize, setActiveSize] = useState("");

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

  const handleAddToCartModalClick = () => {
    setIsModalOpen(!isModalOpan);
  };

  const getImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = errorImg;
  };

  const getProductIDByClickEvent = (id: number) => {
    dispatch(getProductIDByCLick(id));
    console.log("ProductCard.tsx - id: ", id);
  };

  return (
    <>
      <Link to={`/productDetail/${product?.id}`} className={`${gridClass === 'view' ? 'h-auto' : 'h-full'} cursor-pointer`} onClick={() => getProductIDByClickEvent(product.id)}>
        <div className="relative overflow-hidden h-full">
          <img src={product?.imageFiles[0]} onError={getImageError} alt="" className='h-[301px] w-full object-cover' />
          <div className='absolute top-[24px] right-6'>
            {(product?.isNew || product?.discountPercent === 0)? (<span className='w-12 h-12 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium'>New</span>) : (
              <span className='w-12 h-12 rounded-full flex items-center justify-center bg-[#E97171] text-white font-medium'>-{product?.discountPercent}%</span>)}
          </div>
          <div className="lg:absolute hidden h-full w-full bg-[#3A3A3A]/70 lg:flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <div className='w-full'>
              <div className='bg-white w-[70%] mb-6 text-center mx-auto opacity-100 text-[#B88E2F] font-bold text-[16px] leading-6 py-[12px]'
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  dispatch(getProductById(product.id));
                  handleAddToCartModalClick();
                }}>
                Add to cart
              </div>
              <div className='w-full flex items-center gap-3 mt-[24px] px-3 justify-center'>
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
            <h1 className='text-[#3A3A3A] font-bold text-xl leading-7 mb-2 truncate'>{product?.title}</h1>
            <p className='text-[#898989] lg:text-base text-sm font-medium truncate'>{product?.subTitle}</p>

            <div className='mt-[8px] flex gap-4 justify-between items-center'>
              <span className='text-[#3A3A3A] font-bold lg:text-xl'>Rp {product?.discountedPrice}</span>
              <span className='text-[#B0B0B0] font-normal lg:leading-6 line-through'>Rp {product?.salePrice}</span>
            </div>

            <div className='mt-4 flex items-center justify-end gap-1 lg:hidden'>
              <button className='w-6 h-6' onClick={(e) => {
                handleFavBtnClick();
                e.preventDefault();
                e.stopPropagation();
              }}><img src={isLike ? goldheart : heart} alt="heart-icon" className={`${isLike ? '' : "invert"}`} /></button>
              <button className='w-6 h-6'
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  dispatch(getProductById(product.id));
                  handleAddToCartModalClick();
                }}>
                <img src={shopIcon} alt="" /></button>
            </div>
          </div>
        </div>
      </Link>

      <AddToCartModal isModalOpen={isModalOpan} handleCLoseBtnClick={handleAddToCartModalClick}>
        <div className='grid grid-cols-4 gap-3'>
          {productById?.imageFiles?.map((item) => (
            <div key={item} className='w-28 h-28 rounded-lg'>
              <img src={item} onError={getImageError} className='object-cover w-full h-full' alt="" />
            </div>
          ))}
        </div>

        <div className='bg-gray-100 my-3 p-5 pb-7'>
          <div>
            <h1 className='font-medium text-xl truncate'>{product?.title}</h1>
            <div className='text-gray-500 text-sm'>
              <span>{product?.subTitle}</span> - <span>{product?.salePrice}</span>
            </div>
          </div>

          <div className='mt-6'>
            <span className='font-medium uppercase text-sm'>color</span>
            <div className='mt-2 flex gap-2'>
              {productById?.colors?.map((item) => (
                <div key={item.id}
                  style={{ backgroundColor: item.colorHexCode }}
                  className={`w-6 h-6 rounded-full block text-center text-white ${item.colorHexCode === activeColor ? 'border border-blue-500 cursor-default' : 'cursor-pointer'}`}
                  onClick={(e) => {
                    setActiveColor(item.colorHexCode);
                    e.preventDefault();
                    e.stopPropagation();
                  }}>
                  {item.colorHexCode === activeColor && (<span>&#10003;</span>)}
                </div>
              ))}
            </div>
          </div>

          <div className='mt-6'>
            <span className='font-medium uppercase text-sm'>size</span>
            <div className='mt-2 flex gap-2'>
              {productById?.sizes?.map((item) => (
                <span key={item.id}
                  className={`w-6 h-6 bg-[#B88E2F] rounded-full text-white select-none text-[10px] uppercase flex justify-center items-center ${item.sizeName === activeSize ? 'border border-blue-500 cursor-default' : 'cursor-pointer'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveSize(item.sizeName);
                  }}
                >{item?.sizeName}</span>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-2 flex gap-2 justify-end'>
          <div className="flex items-center justify-between border border-gray-500 rounded-lg w-[20%] p-2">
            <button className="font-medium text-xl" >-</button>
            <span className="font-medium">0</span>
            <button className="font-medium text-xl" >+</button>
          </div>
          <button className='bg-[#B88E2F] w-5/12 rounded-md text-white uppercase font-medium'>add to cart</button>
        </div>
      </AddToCartModal>
    </>
  )
};

export default memo(ProductCard);