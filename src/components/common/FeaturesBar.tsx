import quality from '../../assets/images/hQ.svg';
import pr from '../../assets/images/wP.svg';
import shipping from '../../assets/images/shipping.svg';
import support from '../../assets/images/customer-support.svg';

const FeaturesBar = () => {
  return (
    <section className='bg-[#FAF3EA] w-full py-[100px]'>
        <div className='w-[1334px] mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
                <img src={quality} alt="" />
                <div>
                    <span className='font-semibold text-[25px] leading-[37.5px]'>High Quality</span>
                    <p className='text-[#898989] font-medium text-[20px] leading-[30px]'>crafted from top materials</p>
                </div>
            </div>

            <div className='flex items-center gap-[10px]'>
                <img src={pr} alt="" />
                <div>
                    <span className='font-semibold text-[25px] leading-[37.5px]'>Warranty Protection</span>
                    <p className='text-[#898989] font-medium text-[20px] leading-[30px]'>Over 2 years</p>
                </div>
            </div>

            <div className='flex items-center gap-[10px]'>
                <img src={shipping} alt="" />
                <div>
                    <span className='font-semibold text-[25px] leading-[37.5px]'>Free Shipping</span>
                    <p className='text-[#898989] font-medium text-[20px] leading-[30px]'>Order over 150 $</p>
                </div>
            </div>

            <div className='flex items-center gap-[10px]'>
                <img src={support} alt="" />
                <div>
                    <span className='font-semibold text-[25px] leading-[37.5px]'>24 / 7 Support</span>
                    <p className='text-[#898989] font-medium text-[20px] leading-[30px]'>24 / 7 Support</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesBar