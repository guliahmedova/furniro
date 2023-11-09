import quality from '../../assets/images/hQ.svg';
import pr from '../../assets/images/wP.svg';
import shipping from '../../assets/images/shipping.svg';
import support from '../../assets/images/customer-support.svg';

const FeaturesBar = () => {
  return (
    <section className='bg-[#FAF3EA] w-full py-[100px]'>
        <div className='lg:w-[1334px] mx-auto w-full flex items-center lg:flex-row lg:justify-between  md:gap-5 lg:gap-0 sm:gap-6 gap-6 lg:px-0 px-3 md:flex-col sm:flex-col flex-col'>
            <div className='flex items-center lg:gap-[10px] gap-3 lg:w-fit md:w-fit w-full'>
                <img src={quality} alt="" />
                <div>
                    <span className='font-semibold lg:text-[25px] lg:leading-[37.5px] text-sm'>High Quality</span>
                    <p className='text-[#898989] font-medium lg:text-[20px] lg:leading-[30px]'>crafted from top materials</p>
                </div>
            </div>

            <div className='flex items-center lg:gap-[10px] gap-3 lg:w-fit md:w-fit w-full'>
                <img src={pr} alt="" />
                <div>
                    <span className='font-semibold lg:text-[25px] lg:leading-[37.5px]'>Warranty Protection</span>
                    <p className='text-[#898989] font-medium lg:text-[20px] lg:leading-[30px]'>Over 2 years</p>
                </div>
            </div>

            <div className='flex items-center lg:gap-[10px] gap-3 lg:w-fit md:w-fit w-full'>
                <img src={shipping} alt="" />
                <div>
                    <span className='font-semibold lg:text-[25px] lg:leading-[37.5px]'>Free Shipping</span>
                    <p className='text-[#898989] font-medium lg:text-[20px] lg:leading-[30px]'>Order over 150 $</p>
                </div>
            </div>

            <div className='flex items-center lg:gap-[10px] gap-3 lg:w-fit md:w-fit w-full'>
                <img src={support} alt="" />
                <div>
                    <span className='font-semibold lg:text-[25px] lg:leading-[37.5px]'>24 / 7 Support</span>
                    <p className='text-[#898989] font-medium lg:text-[20px] lg:leading-[30px]'>24 / 7 Support</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FeaturesBar