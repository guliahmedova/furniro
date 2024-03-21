import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrow from '../../assets/images//heroArrow.svg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
import { ProductTypes } from "../../models/productTypes";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getProductById } from "../../redux/features/productDetailSlice";
import { addToCart, getAllCartItemsByUserId } from "../../redux/features/cartSlice";
import { getProductRating, getReviewsByProductId } from "../../redux/features/reviewSlice";
import { toast } from 'react-toastify';

const Details = () => {
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [colorId, setColorId] = useState(0);
  const [activeColor, setActiveColor] = useState('');
  const [selectedImg, setSelectedImg] = useState('');
  const [productCount, setProductCount] = useState(1);
  const [productCountMsg, setProductCountMsg] = useState('');
  const { productId } = useParams();
  const userId = localStorage.getItem('userId');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const product: ProductTypes = useSelector((state: RootState) => state.productDetail.product);
  const loading = useSelector((state: RootState) => state.productDetail.loading);
  const totalReviewCount = useSelector((state: RootState) => state.review.totalReviewCount);

  const reviewRating = useSelector((state: RootState) => state.review.reviewRating);
  const totalStars = 5;

  const firstStarMethod = () => {
    if (reviewRating) {
      return [...Array(totalStars)].map((_, i) =>
        i + 1 > reviewRating ? (
          <svg xmlns="http://www.w3.org/2000/svg" key={i} className="text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
              d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" key={i} className="text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        )
      )
    }
  };

  const secondStarMethod = () => {
    return [...Array(totalStars)].map((_, i) =>
      // check if current star should be half
      i < reviewRating && i + 1 > reviewRating ? (
        <svg xmlns="http://www.w3.org/2000/svg" key={i} className="text-yellow-500 w-5 h-auto fill-current"
          viewBox="0 0 16 16">
          <path
            d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
        </svg>

      ) : // check if current star should be full
        i < reviewRating ? (
          <svg xmlns="http://www.w3.org/2000/svg" key={i} className="text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
              d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ) : (
          // else, current star should be empty
          <svg xmlns="http://www.w3.org/2000/svg" key={i} className="text-yellow-500 w-5 h-auto fill-current"
            viewBox="0 0 16 16">
            <path
              d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        )
    );
  };

  const userId_Int = useMemo(() => {
    if (userId) {
      return parseInt(userId);
    };
  }, [userId]);

  const productID_Int = useMemo(() => {
    if (productId) {
      return parseInt(productId);
    }
  }, [productId]);

  useEffect(() => {
    if (productID_Int) {
      dispatch(getProductById({ productID: productID_Int }));
    };
  }, [dispatch, productId]);

  useEffect(() => {
    if (!colorId && product?.colors?.length > 0) {
      setColorId(product.colors?.[0].id);
    }
  }, [colorId, product]);

  useEffect(() => {
    if (product?.colors?.length > 0) {
      setSelectedImg(product?.colors?.[color].imageFiles[0]);
    }
  }, [product, color]);

  useEffect(() => {
    if (product?.colors?.length > 0) {
      setActiveColor(product.colors?.[0].colorHexCode);
    }
  }, [product]);

  useEffect(() => {
    if (productID_Int) {
      dispatch(getReviewsByProductId({
        productId: productID_Int,
        take: 10
      }))
      dispatch(getProductRating(productID_Int));
    }
  }, [productID_Int]);

  const handleSizeActiveClass = (sizeIndex: number) => {
    const sizeID = product?.sizes?.[sizeIndex].id;
    if (sizeID && productID_Int) {
      dispatch(getProductById({ productID: productID_Int, sizeID: sizeID }));
    }
    setSize(sizeIndex);
  };

  const handleColor = (colorIndex: number, colorName: string, colorId: number) => {
    setActiveColor(colorName);
    setColor(colorIndex);
    setColorId(colorId);
  };

  const changeImage = (newImage: string) => {
    setSelectedImg(newImage);
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

  const handleAddToCartBtn = (productId: number, colorId: number) => {
    if (userId_Int) {
      dispatch(addToCart({
        productId: productId,
        colorId: colorId,
        userId: userId_Int,
        count: productCount
      })).then((confirm) => {
        if (confirm.meta.requestStatus === 'rejected') {
          toast.warning(confirm.payload);
        } else if (confirm.meta.requestStatus === 'fulfilled') {
          dispatch(getAllCartItemsByUserId(userId_Int)).then(() => {
            toast.success('The Product added successfully')
          })
        }
      })
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="w-full">
      {loading === 'pending' ? (
        <div className="text-center h-[90vh] w-full flex items-center justify-center">
          <div role="status">
            <svg aria-hidden="true" className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#B88E2F]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex py-8 items-center lg:gap-[25px] gap-3 lg:px-[99px] px-3 bg-[#F9F1E7]">
            <div className="flex items-center gap-[14px]">
              <Link to='/' className="text-[#9F9F9F]">Home</Link>
              <img src={arrow} alt="arrow" />
            </div>
            <div className="flex items-center gap-[14px]">
              <Link to="/shop" className="text-[#9F9F9F]">Shop</Link>
              <img src={arrow} alt="arrow" />
            </div>
            <span className="text-[#000000] select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px]">{product?.title}</span>
          </div>
          <div className="lg:max-w-[1334px] mx-auto mt-8 mb-14 lg:px-0 px-3">
            <div className="flex lg:flex-row flex-col gap-[105px]">

              <div className="flex gap-8 lg:flex-row flex-col-reverse">
                <div className="flex lg:flex-col flex-row lg;gap-8 gap-3">
                  {product?.colors?.[color].imageFiles?.map((item, index) => (
                    <div key={index} className={`rounded-lg w-[76px] h-20 flex items-center justify-center cursor-pointer border`} onClick={() => changeImage(item)}><img src={item} className="w-full h-full object-cover rounded-lg" alt="product-img" /></div>
                  ))}
                </div>
                {product?.colors?.[color].imageFiles && product?.colors?.[color].imageFiles?.length > 0 && (
                  <div className='rounded-lg lg:w-[423px] lg:h-[500px]'>
                    <img className="w-full h-full object-cover rounded-lg" src={selectedImg && selectedImg} alt="slide-img" />
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-black lg:text-[42px] lg:leading-[63px] text-2xl tracking-wide">{product?.title}</h1>
                <div className="flex items-center gap-2">
                  <span className="text-[#9F9F9F] lg:text-2xl font-medium text-lg lg:mt-0 mt-3 block">${product?.discountedPrice?.toFixed(2)}</span>
                  <span className={`text-[#9F9F9F] text-sm lg:mt-0 mt-3 block line-through ${product.discountPercent > 0 ? 'block' : 'hidden'}`}>${product?.salePrice?.toFixed(2)}</span>
                  <span className={`rounded-sm bg-[#f1cb71] text-white px-1 select-none ${product.discountPercent > 0 ? 'block' : 'hidden'}`}>-{product.discountPercent}%</span>
                </div>
                <div className="flex gap-[18px] mt-4 mb-5 items-center">
                  <div className="flex items-center gap-1">
                    {Number.isInteger(reviewRating) ? firstStarMethod() : secondStarMethod()}
                  </div>
                  <span className="text-[#9F9F9F] text-[13px] border-l border-[#9F9F9F] block pl-[22px]">{totalReviewCount && totalReviewCount} Customer Review</span>
                </div>
                <p className="lg:text-[13px] lg:max-w-[390px] font-medium text-black mb-[22px]">{product?.introduction}</p>
                <div className="mb-[18px]">
                  <h4 className="text-[#9F9F9F] text-[14px] mb-3">Size</h4>
                  <div className="flex items-center gap-4">
                    {product?.sizes?.map((item, index) => (
                      <span key={item.id} onClick={() => handleSizeActiveClass(index)} className={`w-[30px] h-[30px] flex-shrink-0 rounded-md ${index === size ? 'bg-[#B88E2F] text-white cursor-default' : 'bg-[#F9F1E7] cursor-pointer'} flex items-center justify-center uppercase text-[13px]`}>{item.sizeName}</span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-[#9F9F9F] text-[14px] mb-3">Color</h4>
                  <div className="flex gap-4 items-center">
                    {product?.colors?.map((item, index) => (
                      <button key={item.id} onClick={() => handleColor(index, item.colorHexCode, item.id)} className={`w-[30px] h-[30px] flex-shrink-0 rounded-full border-2 ${item.colorHexCode === activeColor ? 'border-[#B88E2F]' : ''}`} style={{ backgroundColor: item.colorHexCode }}></button>
                    ))}
                  </div>
                </div>

                {productCountMsg.length > 0 && (
                  <span className='text-sm text-red-600 mb-1.5 font-medium text-left block p-1.5 bg-red-100'>{productCountMsg}</span>
                )}
                <div className="flex lg:flex-row flex-col gap-4 mb-[60px]">
                  <div className="flex items-center justify-between px-3 border-2 border-[#9F9F9F] rounded-lg lg:w-[50%] mx-auto w-[60%] h-16">
                    <button className="font-medium text-xl" onClick={decreaseProductCount}>-</button>
                    <span className="font-medium">{productCount}</span>
                    <button className="font-medium text-xl" onClick={increaseProductCount}>+</button>
                  </div>
                  <button onClick={() => handleAddToCartBtn(
                    product.id,
                    product?.colors?.[color].id,
                  )}
                    className="xl:w-[50%] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out capitalize">Add to cart</button>
                </div>

                <span className="border-t border-[#D9D9D9] xl:w-[600px] block" ></span>

                <div className="pt-10 flex flex-col gap-3">
                  <div className="flex items-center">
                    <span className="text-[#9F9F9F] w-[92px]">SKU</span>
                    <span className="text-[#9F9F9F]"><span className="text-[#9F9F9F] pr-3">:</span>{product?.sku}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#9F9F9F] w-[92px]">Category</span>
                    <span className="text-[#9F9F9F]"><span className="text-[#9F9F9F] pr-3">:</span>{product?.category?.categoryName}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#9F9F9F] w-[92px]">Tags</span>
                    <span className="text-[#9F9F9F]"><span className="text-[#9F9F9F] pr-3">:</span>
                      {product?.tags?.map((tag) => (
                        <span key={tag.id}>#{tag.tagName}, </span>
                      ))}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#9F9F9F] w-[92px]">Share</span>
                    <span className="text-[#9F9F9F] pr-3">:</span>
                    <div className="flex items-center gap-[25px]">
                      <img src={facebook} alt="facebook" className="cursor-pointer" />
                      <img src={linkedin} alt="linkedin" className="cursor-pointer" />
                      <img src={twitter} alt="twitter" className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default Details