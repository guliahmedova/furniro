import { useState} from 'react';
import dot from '../../assets/images/dot.svg';
import line from '../../assets/images/line.svg';
import arrow from '../../assets/images/arrow.svg';
import sliderBtn from '../../assets/images/sliderBtn.svg';
import circleDot from '../../assets/images/dot-circle.svg';
import { cardCarousel } from '../../assets/const/cardCarousel';

const RoomsSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? cardCarousel.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === cardCarousel.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="bg-[#FCF8F3] mb-[67px]">
            <div className="lg:pl-[100px] py-[44px] lg:pr-0 flex lg:items-center lg:flex-row gap-11 flex-col px-3">
                <div className="w-auto">
                    <h1 className="text-[#3A3A3A] font-bold lg:text-[40px] lg:leading-[48px] mb-2 sm:text-2xl text-lg">50+ Beautiful rooms inspiration</h1>
                    <p className="text-[#616161] font-medium lg:leading-6 max-w-[368px] text-sm">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                    <button className="bg-[#B88E2F] mt-[25px] py-3 min-w-[176px] text-[#FFFFFF] font-semibold leading-6">Explore More</button>
                </div>

                <div className="lg:w-9/12 overflow-hidden relative">
                    <div className=' flex gap-6 overflow-hidden scroll-smooth'>
                        {
                            cardCarousel.slice(currentSlide, currentSlide + 3).map(item => (
                                <div className={`${item.id === currentSlide + 1 ? "w-[404px] h-[582px]" : "w-[372px] h-[486px] "} flex-shrink-0 relative `} key={item.id}>
                                    <img src={item.img} className='h-full w-full object-cover' alt="" />
                                    {
                                        item.id === currentSlide + 1 && (
                                            <div className='absolute z-20 left-6 bottom-6 select-none flex items-end'>
                                                <div className='bg-white py-[32px] px-8 w-[217px] opacity-90'>
                                                    <div className='flex gap-2 items-center'>
                                                        <span className='left-6 font-medium'>{item.level}</span>
                                                        <img src={line} alt="" />
                                                        <span className='left-6 font-medium'>{item.title}</span>
                                                    </div>
                                                    <h1 className='mt-[8px] font-semibold text-[28px]'>{item.subTitle}</h1>
                                                </div>
                                                <div className='bg-[#B88E2F] flex items-center justify-center w-[48px] h-[48px]'>
                                                    <img src={arrow} alt="" />
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>

                    <div className='lg:flex items-center w-fit absolute z-10 lg:left-[428px] lg:top-[510px] md:top-[500px] md:left-[420px] sm:top-[500px] sm:left-[420px] top-[500px] hidden'>
                        {
                            cardCarousel.map((card, index) => (
                                index === currentSlide ? (<img key={card.id} src={circleDot} alt="" className='w-[27px] h-[27px]' onClick={() => setCurrentSlide(index)} />) : (<img key={card.id} src={dot} alt="" className='w-[27px] h-[27px]' onClick={() => setCurrentSlide(index)} />)
                            ))
                        }
                    </div>

                    {
                        currentSlide !== 0 && (
                            <button className='w-[48px] h-[48px] bg-slate-50 shadow-lg rounded-full flex items-center scale-[-1] justify-center absolute z-10 top-72 lg:left-6 left-3' onClick={prevSlide}>
                                <img src={sliderBtn} alt="" />
                            </button>
                        )
                    }

                    <button className='w-[48px] h-[48px] bg-slate-50 shadow-lg rounded-full flex items-center justify-center absolute z-10 top-72 lg:right-14 right-3' onClick={nextSlide}>
                        <img src={sliderBtn} alt="" />
                    </button>

                </div>
            </div>
        </section>
    )
}

export default RoomsSlider