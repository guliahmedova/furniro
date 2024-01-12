import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrow from '../../assets/images//heroArrow.svg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import halfStar from '../../assets/images/halfStar.svg';
import star from '../../assets/images/star.svg';
import twitter from '../../assets/images/twitter.svg';
import { ProductTypes } from "../../models/productTypes";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getProductById } from "../../redux/features/productDetailSlice";
import { addToCart, getAllCartItemsByUserId } from "../../redux/features/cartSlice";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
const stars = [star, star, star, star, halfStar];

const Details = () => {
  const userId = localStorage.getItem('userId');
  const userId_Int = useMemo(() => {
    if (userId) {
      return parseInt(userId);
    };
  }, [userId]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [productCount, setProductCount] = useState(1);
  const [productCountMsg, setProductCountMsg] = useState('');
  const product: ProductTypes = useSelector((state: RootState) => state.productDetail.product);

  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [selectedImg, setSelectedImg] = useState(0);
  const { productId } = useParams();

  const loading = useSelector((state: RootState) => state.productDetail.loading);

  const productID_Int = useMemo(() => {
    if (productId) {
      return parseInt(productId);
    }
  }, [productId])

  useEffect(() => {
    if (productID_Int) {
      dispatch(getProductById({ productID: productID_Int }));
    };
  }, [dispatch, productId]);

  const handleSlideImageChange = (index: number) => {
    const slider = product?.colors?.[0].imageFiles.find((_, index) => index === index);
    if (slider !== undefined) {
      setSelectedImg(index);
    }
  };

  const handleSizeActiveClass = (sizeIndex: number) => {
    const sizeID = product?.sizes?.[sizeIndex].id;
    if (sizeID && productID_Int) {
      dispatch(getProductById({ productID: productID_Int, sizeID: sizeID }));
    }
    setSize(sizeIndex);
  };

  const handleColor = (colorIndex: number) => {
    setColor(colorIndex);
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
          MySwal.fire({
            position: "center",
            icon: "warning",
            title: confirm.payload,
            showConfirmButton: false,
            timer: 1500
          });
        } else if (confirm.meta.requestStatus === 'fulfilled') {
          dispatch(getAllCartItemsByUserId(userId_Int)).then(() => {
            MySwal.fire({
              position: "center",
              icon: "success",
              title: "The Product added successfully",
              showConfirmButton: false,
              timer: 1500
            });
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
                    <div key={index} className={`rounded-lg w-[76px] h-20 flex items-center justify-center cursor-pointer`} onClick={() => handleSlideImageChange(index)}><img src={item} className="w-full h-full object-cover rounded-lg" alt="product-img" /></div>
                  ))}
                </div>
                {product?.colors?.[color].imageFiles && product?.colors?.[color].imageFiles?.length > 0 && (
                  <div className='rounded-lg lg:w-[423px] lg:h-[500px]'>
                    <img className="w-full h-full object-cover rounded-lg" src={product?.colors?.[color].imageFiles[selectedImg]} alt="slide-img" />
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-black lg:text-[42px] lg:leading-[63px] text-2xl tracking-wide">{product?.title}</h1>
                <span className="text-[#9F9F9F] lg:text-2xl font-medium text-lg lg:mt-0 mt-3 block">$ {product?.salePrice?.toFixed(2)}</span>
                <div className="flex gap-[18px] mt-4 mb-5">
                  <div className="flex items-center gap-[6px]">
                    {stars.map((item, index) => (
                      <img key={index} src={item} alt="" />
                    ))}
                  </div>
                  <span className="text-[#9F9F9F] text-[13px] border-l border-[#9F9F9F] block pl-[22px]">5 Customer Review</span>
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
                      <button key={item.id} onClick={() => handleColor(index)} className={`w-[30px] h-[30px] flex-shrink-0 rounded-full border-2 ${index === color ? 'border-[#B88E2F]' : ''}`} style={{ backgroundColor: item.colorHexCode }}></button>
                    ))}
                  </div>
                </div>

                {productCountMsg.length > 0 && (
                  <span className='text-sm text-red-600 mb-1.5 font-medium text-left block p-1.5 bg-red-100'>{productCountMsg}</span>
                )}
                <div className="flex lg:flex-row flex-col gap-4 mb-[60px]">
                  <div className="flex items-center justify-between px-3 border-2 border-[#9F9F9F] rounded-lg lg:w-[30%] mx-auto w-[60%] h-16">
                    <button className="font-medium text-xl" onClick={decreaseProductCount}>-</button>
                    <span className="font-medium">{productCount}</span>
                    <button className="font-medium text-xl" onClick={increaseProductCount}>+</button>
                  </div>
                  <button onClick={() => handleAddToCartBtn(
                    product.id,
                    product?.colors?.[color].id,
                  )}
                    className="xl:w-[35%] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out capitalize">Add to cart</button>
                  <button className="xl:w-[35%] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out">+ Compare</button>
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