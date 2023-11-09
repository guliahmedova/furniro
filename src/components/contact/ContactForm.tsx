import address from '../../assets/images/address.svg';
import phone from '../../assets/images/phone.svg';
import workingTime from '../../assets/images/workingTime.svg';

const ContactForm = () => {
    return (
        <section>
            <div className="lg:w-[1058px] mx-auto mt-[98px] mb-[63px] lg:px-0 px-3">
                <div className="text-center">
                    <h1 className="text-[#000000] font-semibold select-none lg:text-[36px] lg:leading-[54px] text-2xl">Get In Touch With Us</h1>
                    <p className="lg:max-w-[644px] lg:tracking-wider select-none mx-auto text-[#9F9F9F] font-normal text-[16px] leading-[24px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className='flex lg:justify-between lg:mt-[82px] lg:flex-row flex-col lg:mb-0 mt-12'>
                    <div className='lg:p-10 flex flex-col lg:gap-[43px] lg:w-6/12 px-3 gap-6'>
                        <div className='flex gap-[30px]'>
                            <img src={address} alt="" />
                            <div>
                                <span className='text-[24px] font-medium'>Address</span>
                                <p className='font-normal text-[1rem] text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]'>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className='flex gap-[30px]'>
                            <img src={phone} alt="" />
                            <div>
                                <span className='text-[24px] font-medium'>Phone</span>
                                <p className='font-normal text-[1rem] text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]'>Mobile: +(84) 546-6789</p>
                                <p className='font-normal text-[1rem] text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]'>Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className='flex gap-[30px]'>
                            <img src={workingTime} alt="" />
                            <div>
                                <span className='text-[24px] font-medium'>Working Time</span>
                                <p className='font-normal text-[1rem] text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]'>Monday-Friday: 9:00 - 22:00</p>
                                <p className='font-normal text-[1rem] text-[#000000] lg:max-w-[212px] tracking-wider leading-[24px]'>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-6/12 lg:mt-0 mt-6 lg:border-r-0 border-t lg:pt-0 pt-6 border-gray-400'>
                        <form>
                            <div className="mb-[36px] w-full">
                                <label htmlFor="name" className="block mb-[22px] text-[1rem] font-medium text-black">Your name</label>
                                <input type="text" id="name" className="border-2 w-full text-[1rem] rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F]" placeholder="Abc" required />
                            </div>

                            <div className="mb-[36px] w-full">
                                <label htmlFor="email" className="block mb-[22px] text-[1rem] font-medium text-black">Email address</label>
                                <input type="text" id="email" className="border-2 w-full text-[1rem] rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F]" placeholder="Abc@def.com" required />
                            </div>

                            <div className="mb-[36px] w-full">
                                <label htmlFor="subject" className="block mb-[22px] text-[1rem] font-medium text-black">Subject</label>
                                <input type="text" id="subject" className="border-2 w-full text-[1rem] rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F]" placeholder="This is an optional" required />
                            </div>

                            <div className="mb-[36px] w-full">
                                <label htmlFor="message" className="block mb-[22px] text-[1rem] font-medium text-black">Message</label>
                                <textarea id="message" className="border-2 w-full text-[1rem] rounded-md outline-0 py-[25px] px-[31px] border-[#9F9F9F] resize-none" placeholder="Hi! i’d like to ask about" required></textarea>
                            </div>

                            <button className='bg-[#B88E2F] w-[237px] py-[13.75px] rounded-md text-white text-[1rem] font-normal leading-[24px] hover:bg-yellow-600 lg:mx-0 mx-auto block'>Submit</button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ContactForm