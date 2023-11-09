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

const Details = () => {
  const [sliderImg, setSliderImg] = useState(mainD);

  const handleSlideImageChange = (id: string) => {
    const slider = slides.find(item => item.id === id)?.img;
    if (slider !== undefined) {
      setSliderImg(slider);
    }
  };

  return (
    <section className="w-full">
      <div className="py-[32px] flex items-center lg:gap-[25px] gap-3 lg:px-[99px] px-3 bg-[#F9F1E7]">
        <div className="flex items-center gap-[14px]">
          <Link to='/' className="text-[#9F9F9F] font-normal text-[1rem]">Home</Link>
          <img src={arrow} alt="" />
        </div>
        <div className="flex items-center gap-[14px]">
          <Link to="/shop" className="text-[#9F9F9F] font-normal text-[1rem]">Shop</Link>
          <img src={arrow} alt="" />
        </div>
        <span className="text-[#000000] font-normal text-[1rem] select-none lg:border-l-2 border-[#9F9F9F] lg:pl-[24px]">Asgaard sofa</span>
      </div>

      <div className="lg:max-w-[1334px] mx-auto mt-8 mb-14 lg:px-0 px-3">
        <div className="flex lg:flex-row flex-col gap-[105px]">

          <div className="flex gap-8 lg:flex-row flex-col-reverse">
            <div className="flex lg:flex-col flex-row lg;gap-8 gap-3">
              {slides.map(item => (
                <div key={item.id} className="bg-[#F9F1E7] rounded-lg lg:w-[76px] lg:h-20 flex items-center justify-center cursor-pointer" onClick={() => handleSlideImageChange(item.id)}><img src={item.img} alt="" /></div>
              ))}
            </div>
            <div className="bg-[#F9F1E7] rounded-lg lg:w-[423px] lg:h-[500px]"><img className="w-full h-full object-contain" src={sliderImg} alt="" /></div>
          </div>

          <div>
            <h1 className="text-black lg:text-[42px] font-normal lg:leading-[63px] text-2xl tracking-wide">Asgaard sofa</h1>
            <span className="text-[#9F9F9F] lg:text-2xl font-medium text-lg lg:mt-0 mt-3 block leading-normal">Rs. 250,000.00</span>
            <div className="flex gap-[18px] mt-4 mb-5">
              <div className="flex items-center gap-[6px]">
                {stars.map((item, index) => (
                  <img key={index} src={item} alt="" />
                ))}
              </div>
              <span className="text-[#9F9F9F] text-[13px] leading-normal font-normal border-l-2 border-[#9F9F9F] block pl-[22px]">5 Customer Review</span>
            </div>
            <p className="lg:text-[13px] leading-normal font-normal lg:max-w-[424px] text-black mb-[22px]">Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
            <div className="mb-[18px]">
              <h4 className="text-[#9F9F9F] font-normal leading-normal text-[14px] mb-3">Size</h4>
              <div className="flex items-center gap-4">
                <span className="w-[30px] h-[30px] flex-shrink-0 rounded-md bg-[#B88E2F] flex items-center justify-center text-white text-[13px] font-normal leading-normal">L</span>
                <span className="w-[30px] h-[30px] flex-shrink-0 rounded-md bg-[#F9F1E7] flex items-center justify-center text-black text-[13px] font-normal leading-normal">XL</span>
                <span className="w-[30px] h-[30px] flex-shrink-0 rounded-md bg-[#F9F1E7] flex items-center justify-center text-black text-[13px] font-normal leading-normal">XS</span>
              </div>
            </div>

            <div className="mb-[32px]">
              <h4 className="text-[#9F9F9F] font-normal leading-normal text-[14px] mb-3">Color</h4>
              <div className="flex gap-4 items-center">
                <button className="w-[30px] h-[30px] flex-shrink-0 rounded-full bg-[#816DFA]"></button>
                <button className="w-[30px] h-[30px] flex-shrink-0 rounded-full bg-[#000]"></button>
                <button className="w-[30px] h-[30px] flex-shrink-0 rounded-full bg-[#B88E2F]"></button>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-4 mb-[60px]">
              <div className="flex items-center justify-between lg:px-3 border-2 border-[#9F9F9F] rounded-lg lg:min-w-[123px] h-16">
                <button className="text-black text-[1rem] font-normal leading-normal">-</button>
                <span className="text-black text-[1rem] font-normal leading-normal">1</span>
                <button className="text-black text-[1rem] font-normal leading-normal">+</button>
              </div>
              <button className="lg:w-[215px] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl leading-normal font-normal capitalize">Add to cart</button>
              <button className="lg:w-[215px] h-16 flex-shrink-0 rounded-2xl border-2 border-black text-black text-xl leading-normal font-normal">+ Compare</button>
            </div>

            <div className="border-t-2 border-[#D9D9D9] pt-10 flex flex-col gap-3">
              <div className="flex items-center">
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal w-[92px]">SKU</span>
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal"><span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal pr-3">:</span>SS001</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal w-[92px]">Category</span>
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal"><span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal pr-3">:</span>Sofas</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal w-[92px]">Tags</span>
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal"><span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal pr-3">:</span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal w-[92px]">Share</span>
                <span className="text-[#9F9F9F] text-[1rem] font-normal leading-normal pr-3">:</span>
                <div className="flex items-center gap-[25px]">
                  <img src={facebook} alt="" />
                  <img src={linkedin} alt="" />
                  <img src={twitter} alt="" />
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