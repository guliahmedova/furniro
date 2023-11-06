import { Link } from 'react-router-dom';
import prs1 from '../../assets/images/prs1.svg';
import share from '../../assets/images/share.svg';
import compare from '../../assets/images/compare.svg';
import heart from '../../assets/images/cardHeart.svg';

const ProductCard = () => {
  return (
    <Link to="/productDetail/1" className="h-full group cursor-pointer">
      <div className="relative overflow-hidden h-full">
        <Link to="/">
          <img src={prs1} alt="" className='h-auto w-full object-cover' />
        </Link>
        <span className='absolute top-[24px] right-6 w-12 h-12 rounded-full bg-[#E97171] flex items-center justify-center text-white font-medium text-[1rem]'>-30%</span>
        <div className="absolute h-full w-full bg-[#3A3A3A]/70 flex items-center justify-center bottom-0 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
          <div>
            <button className='bg-white w-[202px] block mb-6 mx-auto opacity-100 text-[#B88E2F] font-bold text-[16px] leading-6 py-[12px]'>Add to cart</button>
            <div className='flex items-center gap-5 mt-[24px]'>
              <div className='flex items-center gap-1 font-semibold text-[1rem] leading-6 text-white'>
                <img src={share} alt="" /> <span>Share</span>
              </div>
              <div className='flex items-center gap-1 font-semibold text-[1rem] leading-6 text-white'>
                <img src={compare} alt="" /> <span>Compare</span>
              </div>
              <div className='flex items-center gap-1 font-semibold text-[1rem] leading-6 text-white'>
                <img src={heart} alt="" /> <span>Like</span>
              </div>
            </div>
          </div>
        </div>

        <div className='p-[16px] pb-8 bg-[#F4F5F7]'>
          <Link to="/">
            <h1 className='text-[#3A3A3A] font-bold text-xl leading-7 mb-2'>Lolito</h1>
          </Link>
          <p className='text-[#898989] font-medium text-[1rem]'>Luxury big sofa</p>

          <div className='mt-[8px] flex gap-4'>
            <span className='text-[#3A3A3A] font-bold text-xl'>Rp 2.500.000</span>
            <span className='text-[#B0B0B0] font-normal text-[1rem] leading-6 line-through'>Rp 3.500.000</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard