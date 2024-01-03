import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import arrow from '../../assets/images//heroArrow.svg';
import facebook from '../../assets/images/facebook.svg';
import halfStar from '../../assets/images/halfStar.svg';
import linkedin from '../../assets/images/linkedin.svg';
import star from '../../assets/images/star.svg';
import twitter from '../../assets/images/twitter.svg';
import { ProductTypes } from "../../models/productTypes";
import { RootState, useAppDispatch } from "../../redux/app/store";
import { getProductById } from "../../redux/features/productDetailSlice";
import { addToCart } from "../../redux/features/cartSlice";
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

  useEffect(() => {
    if (productId) {
      dispatch(getProductById({ productID: parseInt(productId), sizeID: 2 }));
    };
  }, [dispatch, productId]);

  const handleSlideImageChange = (index: number) => {
    const slider = product?.colors?.[0].imageFiles.find((_, index) => index === index);
    if (slider !== undefined) {
      setSelectedImg(index);
    }
  };

  const handleSizeActiveClass = (sizeIndex: number) => {
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
      }))
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="w-full">
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
            <span className="text-[#9F9F9F] lg:text-2xl font-medium text-lg lg:mt-0 mt-3 block">Rs. {product?.salePrice}</span>
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
                product?.colors?.[color].id
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
    </section>
  )
}

export default Details