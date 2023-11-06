import address from '../../assets/images/address.svg';
import phone from '../../assets/images/phone.svg';
import workingTime from '../../assets/images/workingTime.svg';

const ContactForm = () => {
    return (
        <section>
            <div className="w-[1058px] mx-auto mt-[98px] mb-[63px]">
                <div className="text-center">
                    <h1 className="text-[#000000] font-semibold select-none text-[36px] leading-[54px]">Get In Touch With Us</h1>
                    <p className="max-w-[644px] tracking-wider select-none mx-auto text-[#9F9F9F] font-normal text-[16px] leading-[24px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>

                <div className='flex justify-between mt-[82px]'>
                    <div className='p-10 flex flex-col gap-[43px] w-6/12'>
                        <div className='flex gap-[30px]'>
                            <img src={address} alt="" />
                            <div>
                                <span className='text-[24px] font-medium'>Address</span>
                                <p className='font-normal text-[1rem] text-[#000000] max-w-[212px] tracking-wider leading-[24px]'>236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                        </div>
                        <div className='flex gap-[30px]'>
                            <img src={phone} alt="" />
                            <div>
                                <span className='text-[24px] font-medium'>Phone</span>
                                <p className='font-normal text-[1rem] text-[#000000] max-w-[212px] tracking-wider leading-[24px]'>Mobile: +(84) 546-6789</p>
                                <p className='font-normal text-[1rem] text-[#000000] max-w-[212px] tracking-wider leading-[24px]'>Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                        <div className='flex gap-[30px]'>
                            <img src={workingTime} alt="" />
                            <div>
                                <span className='text-[24px] font-medium'>Working Time</span>
                                <p className='font-normal text-[1rem] text-[#000000] max-w-[212px] tracking-wider leading-[24px]'>Monday-Friday: 9:00 - 22:00</p>
                                <p className='font-normal text-[1rem] text-[#000000] max-w-[212px] tracking-wider leading-[24px]'>Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>

                    <div className='w-6/12'>
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

                            <button className='bg-[#B88E2F] w-[237px] py-[13.75px] rounded-md text-white text-[1rem] font-normal leading-[24px] hover:bg-yellow-600'>Submit</button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ContactForm