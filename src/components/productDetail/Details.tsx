import { useState } from "react";
import { Link } from "react-router-dom"
import mainD from '../../assets/images/mainD.svg';
import arrow from '../../assets/images//heroArrow.svg';
import { slides } from "../../assets/const/slides";
import star from '../../assets/images/star.svg';
import halfStar from '../../assets/images/halfStar.svg';
import facebook from '../../assets/images/facebook.svg';
import linkedin from '../../assets/images/linkedin.svg';
import twitter from '../../assets/images/twitter.svg';
const stars = [star, star, star, star, halfStar];
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { ProductTypes } from "../../models/productTypes";

const Details = () => {
  const [sliderImg, setSliderImg] = useState(mainD);
  const [productCount, setProductCount] = useState(0);
  const detailProduct: ProductTypes = useSelector((state: RootState) => state.product.product);

  const initialSize = detailProduct?.ProductSizes?.length > 0 ? detailProduct.ProductSizes[0] : '';
  const [size, setSize] = useState(initialSize);

  const initialColor = detailProduct?.ProductColors?.length > 0 ? detailProduct.ProductColors[0] : '';
  const [color, setColor] = useState(initialColor);

  const handleSlideImageChange = (id: string) => {
    const slider = slides.find(item => item.id === id)?.img;
    if (slider !== undefined) {
      setSliderImg(slider);
    }
  };

  const handleSizeActiveClass = (size: string) => {
    setSize(size);
  };

  const handleColor = (color: string) => {
    setColor(color);
  };

  const increaseProductCount = () => {
    setProductCount(prevState => prevState + 1);
  };

  const decreaseProductCount = () => {
    if (productCount > 0) {
      setProductCount(prevState => prevState - 1);
    };
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
        <span className="text-[#000000] select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px]">{detailProduct?.Title}</span>
      </div>

      <div className="lg:max-w-[1334px] mx-auto mt-8 mb-14 lg:px-0 px-3">
        <div className="flex lg:flex-row flex-col gap-[105px]">

          <div className="flex gap-8 lg:flex-row flex-col-reverse">
            <div className="flex lg:flex-col flex-row lg;gap-8 gap-3">
              {slides.map(item => (
                <div key={item.id} style={{ backgroundColor: color }} className={`rounded-lg lg:w-[76px] lg:h-20 flex items-center justify-center cursor-pointer`} onClick={() => handleSlideImageChange(item.id)}><img src={item.img} alt="product-img" /></div>
              ))}
            </div>
            <div style={{ backgroundColor: color }} className={`rounded-lg lg:w-[423px] lg:h-[500px]`}><img className="w-full h-full object-contain" src={sliderImg} alt="slide-img" /></div>
          </div>

          <div>
            <h1 className="text-black lg:text-[42px] lg:leading-[63px] text-2xl tracking-wide">{detailProduct?.Title}</h1>
            <span className="text-[#9F9F9F] lg:text-2xl font-medium text-lg lg:mt-0 mt-3 block">Rs. {detailProduct?.SalePrice}</span>
            <div className="flex gap-[18px] mt-4 mb-5">
              <div className="flex items-center gap-[6px]">
                {stars.map((item, index) => (
                  <img key={index} src={item} alt="" />
                ))}
              </div>
              <span className="text-[#9F9F9F] text-[13px] border-l border-[#9F9F9F] block pl-[22px]">5 Customer Review</span>
            </div>
            <p className="lg:text-[13px] lg:max-w-[390px] font-medium text-black mb-[22px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <div className="mb-[18px]">
              <h4 className="text-[#9F9F9F] text-[14px] mb-3">Size</h4>
              <div className="flex items-center gap-4">
                {detailProduct?.ProductSizes?.map((item) => (
                  <span key={item} onClick={() => handleSizeActiveClass(item)} className={`w-[30px] h-[30px] flex-shrink-0 rounded-md ${size === item ? 'bg-[#B88E2F] text-white cursor-default' : 'bg-[#F9F1E7] cursor-pointer'} flex items-center justify-center uppercase text-[13px]`}>{item}</span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-[#9F9F9F] text-[14px] mb-3">Color</h4>
              <div className="flex gap-4 items-center">
                {detailProduct?.ProductColors?.map((item) => (
                  <button key={item} onClick={() => handleColor(item)} className={`w-[30px] h-[30px] flex-shrink-0 rounded-full border-2 ${item === color ? 'border-[#B88E2F]' : ''}`} style={{ backgroundColor: item }}></button>
                ))}
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 mb-[60px]">
              <div className="flex items-center justify-between px-3 border-2 border-[#9F9F9F] rounded-lg lg:w-[30%] mx-auto w-[60%] h-16">
                <button className="font-medium text-xl" onClick={decreaseProductCount}>-</button>
                <span className="font-medium">{productCount}</span>
                <button className="font-medium text-xl" onClick={increaseProductCount}>+</button>
              </div>
              <button className="xl:w-[35%] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out capitalize">Add to cart</button>
              <button className="xl:w-[35%] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl hover:bg-[#B88E2F] hover:text-white hover:border-[#B88E2F] duration-300 ease-in-out">+ Compare</button>
            </div>

            <span className="border-t border-[#D9D9D9] xl:w-[600px] block" ></span>

            <div className="pt-10 flex flex-col gap-3">
              <div className="flex items-center">
                <span className="text-[#9F9F9F] w-[92px]">SKU</span>
                <span className="text-[#9F9F9F]"><span className="text-[#9F9F9F] pr-3">:</span>{detailProduct?.Sku}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9F9F9F] w-[92px]">Category</span>
                <span className="text-[#9F9F9F]"><span className="text-[#9F9F9F] pr-3">:</span>{detailProduct?.CategoryId}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9F9F9F] w-[92px]">Tags</span>
                <span className="text-[#9F9F9F]"><span className="text-[#9F9F9F] pr-3">:</span>
                  {detailProduct?.ProductTags?.map((tag) => (
                    <span key={tag}>{tag}, </span>
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