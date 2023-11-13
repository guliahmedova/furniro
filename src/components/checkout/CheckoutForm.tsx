import { useFormik } from 'formik';
import circle from '../../assets/images/blackCircle.svg';
import { validate } from './formValidate';

const CheckoutForm = () => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            companyName: '',
            country: '',
            streetAddress: '',
            town: '',
            province: '',
            zipCode: '',
            phone: '',
            emailAddress: '',
            note: ''
        },
        validate,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <section className="mt-[63px] mb-[123px]">
            <div className="lg:max-w-[1242px] mx-auto flex lg:flex-row flex-col lg:px-0 px-3">
                <div className="lg:w-6/12 lg:mb-0 mb-12">
                    <h1 className="font-semibold text-[#000000] text-4xl mb-9 leading-10 lg:text-left text-center">Billing details</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-8 mb-9 lg:flex-row flex-col">
                            <div className="lg:w-6/12">
                                <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="firstName">First Name</label>
                                <input className="border-2 border-[#9F9F9F] rounded-[10px] px-7 w-full h-[75px]" name='firstName' value={values.firstName} onChange={handleChange} type="text" id="firstName" />
                                {errors.firstName ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.firstName}</div> : null}
                            </div>
                            <div className="lg:w-6/12">
                                <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="lastName">Last Name</label>
                                <input type="text" className="border-2 border-[#9F9F9F] w-full px-7 rounded-[10px] h-[75px]" name='lastName' value={values.lastName} onChange={handleChange} id="lastName" />
                                {errors.lastName ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.lastName}</div> : null}
                            </div>
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="companyName">Company Name (Optional)</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" name='companyName' value={values.companyName} onChange={handleChange} id="companyName" />
                            {errors.companyName ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.companyName}</div> : null}
                        </div>

                        <div className="mb-9 relative">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="countryRegion">Country / Region</label>
                            <select name="country" value={values.country} onChange={handleChange} id="countryRegion" className="border-2 appearance-none border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]">
                                <option value="Example1" defaultChecked className="text-[#9F9F9F]">Sri Lanka</option>
                                <option value="Example2">Example 2</option>
                                <option value="Example3">Example 3</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 top-12 flex items-center px-3 pointer-events-none">
                                <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            {errors.country ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.country}</div> : null}
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="streetAddress">Street address</label>
                            <input type="text" name='streetAddress' value={values.streetAddress} onChange={handleChange} className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" id="streetAddress" />
                            {errors.streetAddress ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.streetAddress}</div> : null}
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="townCity">Town / City</label>
                            <input type="text" name='town' value={values.town} onChange={handleChange} className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" id="townCity" />
                            {errors.town ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.town}</div> : null}
                        </div>

                        <div className="mb-9 relative">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="Province">Province</label>
                            <select name="province" value={values.province} onChange={handleChange} id="Province" className="border-2 appearance-none border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]">
                                <option value="Example1" defaultChecked >Western Province</option>
                                <option value="Example2">Example 2</option>
                                <option value="Example3">Example 3</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 top-12 flex items-center px-3 pointer-events-none">
                                <svg className="w-6 h-6 text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            {errors.province ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.province}</div> : null}
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="ZIP-code">ZIP code</label>
                            <input type="text" name='zipCode' value={values.zipCode} onChange={handleChange} className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" id="ZIP-code" />
                            {errors.zipCode ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.zipCode}</div> : null}
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="Phone">Phone</label>
                            <input type="number" name='phone' value={values.phone} onChange={handleChange} className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" id="Phone" />
                            {errors.phone ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.phone}</div> : null}
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] leading-6 mb-[22px] block" htmlFor="emailAddress">Email address</label>
                            <input type="email" name='emailAddress' value={values.emailAddress} onChange={handleChange} className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" id="emailAddress" />
                            {errors.emailAddress ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.emailAddress}</div> : null}
                        </div>

                        <div>
                            <input type="text" name='note' value={values.note} onChange={handleChange} className="border-2 border-[#9F9F9F] px-7 w-full rounded-[10px] h-[75px]" placeholder="Additional information" />
                            {errors.note ? <div className='text-red-600 font-semibold text-sm mt-1'>{errors.note}</div> : null}
                        </div>
                    </form>
                </div>
                <div className="lg:w-6/12 lg:p-20">
                    <div className="flex items-center justify-between mb-[14px]">
                        <span className="text-[#000000] font-medium lg:text-2xl lg:leading-9 text-xl">Product</span>
                        <span className="text-[#000000] font-medium lg:text-2xl lg:leading-9 text-xl">Subtotal</span>
                    </div>
                    <div className="flex justify-between mb-[22px]">
                        <div className="flex gap-3 items-center">
                            <span className="text-[#9F9F9F] leading-6">Asgaard sofa</span><span className="text-[#000000] font-medium text-xs">X</span> <span className="text-[#000000] font-medium text-xs">1</span>
                        </div>
                        <span className="text-[#000000] font-light">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span className="font-normal">Subtotal</span>
                        <span className="text-[#000000] font-light">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between pb-[33px] border-b-2 border-[#D9D9D9]">
                        <span className="font-normal">Total</span>
                        <span className="text-[#B88E2F] font-bold lg:text-2xl">Rs. 250,000.00</span>
                    </div>
                    <div className="mt-[22px]">
                        <div className='flex items-center gap-4'>
                            <img src={circle} alt="" />
                            <span className="font-normal text-black">Direct Bank Transfer</span>
                        </div>
                        <p className='text-[#9F9F9F] font-light mt-3 mb-6'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <form className='mb-[22px] flex flex-col gap-3'>
                            <div className='flex items-center gap-4'>
                                <input type="radio" id='rad1' value="" name="default-radio" className='w-[14px] h-[14px] accent-black' />
                                <label htmlFor='rad1' className='text-[#9F9F9F] font-medium'>Direct Bank Transfer</label>
                            </div>
                            <div className='flex items-center gap-4'>
                                <input type="radio" id='rad2' value="" name="default-radio" className='w-[14px] h-[14px] accent-black' />
                                <label htmlFor='rad2' className='text-[#9F9F9F] font-medium'>Cash On Delivery</label>
                            </div>
                        </form>
                        <p className='font-light'>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-black font-semibold'>privacy policy.</span>
                        </p>
                    </div>
                    <button className='text-black text-xl mt-12 border-2 border-black rounded-[15px] py-[17px] w-[318px] mx-auto block'>Place order</button>
                </div>
            </div>
        </section>
    )
};

export default CheckoutForm;