import pr from '../../assets/images/wP.svg';
import quality from '../../assets/images/hQ.svg';
import shipping from '../../assets/images/shipping.svg';
import support from '../../assets/images/customer-support.svg';

const FeaturesBar = () => {
    return (
        <section className='bg-[#FAF3EA]'>
            <div className="py-24 w-[85%] mx-auto">
                <div className="flex justify-between lg:flex-row flex-col flex-wrap gap-6">
                    <div className="flex gap-3 items-center">
                        <img className='w-10 lg:w-fit' src={quality} alt="quality-icon" />
                        <div>
                            <span className='font-semibold lg:text-2xl sm:text-xl'>High Quality</span>
                            <p className='text-[#898989] font-medium lg:text-xl'>crafted from top materials</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className='w-10 lg:w-fit' src={pr} alt="protection-icon" />
                        <div>
                            <span className='font-semibold lg:text-2xl md:text-xl'>Warranty Protection</span>
                            <p className='text-[#898989] font-medium lg:text-xl'>Over 2 years</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className='w-10 lg:w-fit' src={shipping} alt="shipping-icon" />
                        <div>
                            <span className='font-semibold lg:text-2xl md:text-xl'>Free Shipping</span>
                            <p className='text-[#898989] font-medium lg:text-xl'>Order over 150 $</p>
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img className='w-10 lg:w-fit' src={support} alt="support-icon" />
                        <div>
                            <span className='font-semibold lg:text-2xl md:text-xl'>24 / 7 Support</span>
                            <p className='text-[#898989] font-medium lg:text-xl'>Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default FeaturesBar;