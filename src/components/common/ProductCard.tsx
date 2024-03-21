import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import errorImg from '../../assets/images/errorImage.png';
import goldheart from '../../assets/images/goldheart.svg';
import shopIcon from '../../assets/images/shoppingCart.svg';
import heart from '../../assets/images/whiteheart.svg';
import { ProductTypes } from '../../models/productTypes';
import { RootState, useAppDispatch } from '../../redux/app/store';
import { addToCart, getAllCartItemsByUserId } from '../../redux/features/cartSlice';
import { getProductById } from '../../redux/features/productDetailSlice';
import { getProductIDByCLick } from '../../redux/features/productSlice';
import { addToWishlist, createWishlist, deleteWishlist, removeFromWishlist } from '../../redux/features/wishlistSlice';
import AddToCartModal from './AddToCartModal';
import ShareButton from './ShareButton';

interface ProductCardProps {
  product: ProductTypes;
  gridClass?: string
};

const ProductCard: FC<ProductCardProps> = ({ product, gridClass }) => {
  const userId = localStorage.getItem('userId');
  const userId_int = useMemo(() => {
    if (userId) {
      return parseInt(userId);
    }
  }, [userId]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isModalOpan, setIsModalOpen] = useState(false);
  const productById: ProductTypes = useSelector((state: RootState) => state?.productDetail?.product);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);
  const [productCount, setProductCount] = useState(1);
  const [productCountMsg, setProductCountMsg] = useState('');

  const isLike = useSelector((state: RootState) => (
    state.wishlist?.product.some((favItem) => favItem?.id === product?.id)
  ));

  const handleFavBtnClick = useCallback(() => {
    if (isLike) {
      dispatch(removeFromWishlist(product));
      if (userId_int) {
        dispatch(deleteWishlist({
          userId: userId_int,
          productId: product.id,
          colorId: product.colors?.[0].id
        }));
      }
    } else {
      dispatch(addToWishlist(product));
      if (userId_int) {
        dispatch(createWishlist({
          appUserId: userId_int,
          productId: product.id
        }))
      }
    }
  }, [dispatch, isLike, product]);

  const handleAddToCartModalClick = () => {
    if (userId_int) {
      setIsModalOpen(!isModalOpan);
    } else {
      navigate('/login');
    }
  };

  const getImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = errorImg;
  };

  const getProductIDByClickEvent = (id: number) => {
    dispatch(getProductIDByCLick(id));
  };

  const handleAddToCartBtn = () => {
    if (userId_int && productById?.colors?.[color].id) {
      dispatch(addToCart({
        productId: product?.id,
        colorId: productById?.colors?.[color].id,
        userId: userId_int,
        count: productCount
      })).then((confirm) => {
        if (confirm.meta.requestStatus === 'rejected') {
          toast.warning(confirm.payload)
        } else if (confirm.meta.requestStatus === 'fulfilled') {
          dispatch(getAllCartItemsByUserId(userId_int)).then(() => {
            toast.success('The Product added successfully');
          })
        }
      })
      setIsModalOpen(false);
    }
  };

  const increaseProductCount = () => {
    if (productCount < 10) {
      setProductCount(prevState => prevState + 1);
      setProductCountMsg('');
    } else {
      setProductCountMsg('You can only add 10 products at once!');
    }
  };

  const decreaseProductCount = () => {
    if (productCount > 0) {
      setProductCountMsg('');
      setProductCount(prevState => prevState - 1);
    };
  };

  return (
    <>
      <Link to={`/productDetail/${product?.id}`} className={`${gridClass === 'view' ? 'h-auto' : 'h-full'} cursor-pointer`} onClick={() => getProductIDByClickEvent(product.id)}>
        <div className="relative overflow-hidden h-full">
          <img src={product?.imageFiles?.[0]} onError={getImageError} alt="" className='h-[301px] w-full object-cover' />

          <div className='absolute top-[24px] right-6'>
            {(product.isNew && product.discountPercent !== 0) ? (
              <div className='flex items-center justify-between gap-2'>
                <span className='w-12 h-12 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium'>New</span>
                <span className='w-12 h-12 rounded-full flex items-center justify-center bg-[#E97171] text-white font-medium'>-{product?.discountPercent}%</span>
              </div>
            ) : (
              product?.isNew ?
                (<span className='w-12 h-12 rounded-full bg-[#2EC1AC] flex items-center justify-center text-white font-medium'>New</span>) : (
                  product.discountPercent !== 0 &&
                  <span className='w-12 h-12 rounded-full flex items-center justify-center bg-[#E97171] text-white font-medium'>-{product?.discountPercent}%</span>
                )
            )}
          </div>

          <div className="lg:absolute hidden h-full w-full bg-[#3A3A3A]/70 lg:flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
            <div className='w-full'>
              <div className='bg-white w-[70%] mb-6 text-center mx-auto opacity-100 text-[#B88E2F] font-bold text-[16px] leading-6 py-[12px]'
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  dispatch(getProductById({
                    productID: product.id,
                    sizeID: 1
                  }));
                  handleAddToCartModalClick();
                }}>
                Add to cart
              </div>
              <div className='w-full flex items-center gap-3 mt-[24px] px-3 justify-center'>
                <ShareButton productId={product?.id} />
                <div className='flex items-center font-semibold gap-1 leading-6 text-white'
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
              <span className='text-[#3A3A3A] font-bold lg:text-xl'>${product?.discountedPrice?.toFixed(2).replace(/(\.0+|0+)$/, '')}</span>
              <span className={`text-[#B0B0B0] font-normal lg:leading-6 line-through ${product.discountPercent === 0 ? 'hidden' : ''}`}>${product?.salePrice?.toFixed(2).replace(/(\.0+|0+)$/, '')}</span>
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
                  dispatch(getProductById({
                    productID: product.id,
                    sizeID: 1
                  }));
                  handleAddToCartModalClick();
                }}>
                <img src={shopIcon} alt="" /></button>
            </div>
          </div>
        </div>
      </Link>

      <AddToCartModal isModalOpen={isModalOpan} handleCLoseBtnClick={handleAddToCartModalClick}>
        <div className='grid grid-cols-4 gap-3'>
          {productById?.colors?.[0].imageFiles?.map((item) => (
            <div key={item} className='w-28 h-28 rounded-lg'>
              <img src={item} onError={getImageError} className='object-cover w-full h-full' alt="" />
            </div>
          ))}
        </div>

        <div className='bg-gray-100 my-3 p-5 pb-7'>
          <div>
            <h1 className='font-medium text-xl truncate'>{product?.title}</h1>
            <div className='text-gray-500'>
              <span>{product?.subTitle}</span> / $<span>{product?.discountedPrice}</span>  <span className='text-sm line-through'>${product?.salePrice}</span>
            </div>
          </div>

          <div className='mt-6'>
            <span className='font-medium uppercase text-sm'>color</span>
            <div className='mt-2 flex gap-2'>
              {productById?.colors?.map((item, index) => (
                <div key={item.id}
                  style={{ backgroundColor: item.colorHexCode }}
                  className={`w-6 h-6 rounded-full block text-center text-white ${index === color ? 'border border-blue-500 cursor-default' : 'cursor-pointer'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setColor(index);
                    e.stopPropagation();
                  }}>
                  {index === color && (<span>&#10003;</span>)}
                </div>
              ))}
            </div>
          </div>

          <div className='mt-6'>
            <span className='font-medium uppercase text-sm'>size</span>
            <div className='mt-2 flex gap-2'>
              {productById?.sizes?.map((item, index) => (
                <span key={item.id}
                  className={`w-6 h-6 bg-[#B88E2F] rounded-full text-white select-none text-[10px] uppercase flex justify-center items-center ${index === size ? 'border border-blue-500 cursor-default' : 'cursor-pointer'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSize(index);
                  }}
                >{item?.sizeName}</span>
              ))}
            </div>
          </div>
        </div>

        {productCountMsg.length > 0 && (
          <span className='text-sm text-red-600 font-medium text-left block p-1.5 bg-red-100'>{productCountMsg}</span>
        )}
        <div className='mt-2 flex gap-2 justify-end'>
          <div className="flex items-center justify-between border border-gray-500 rounded-lg w-[20%] p-2">
            <button className="font-medium text-xl" onClick={decreaseProductCount} >-</button>
            <span className="font-medium">{productCount}</span>
            <button className="font-medium text-xl" onClick={increaseProductCount} >+</button>
          </div>
          <button onClick={handleAddToCartBtn} className='bg-[#B88E2F] w-5/12 rounded-md text-white uppercase font-medium'>add to cart</button>
        </div>
      </AddToCartModal>
    </>
  )
};

export default memo(ProductCard);