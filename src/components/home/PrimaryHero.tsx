
const PrimaryHero = () => {
  return (
    <section className='bg-primary-hero-image h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover font-Poppins'>
      <div className="h-screen w-full flex lg:justify-end items-center px-[58px] justify-center">
        <div className="lg:w-5/12 bg-[#FFF3E3] border-r-8 shadow-sm pt-[62px] lg:mt-[153px] pb-[37px] px-9 md:min-w-min">
          <span className="text-[1rem] font-medium tracking-[3px]">New Arrival</span>
          <h1 className="pt-1 lg:mb-4 lg:mt-0 text-[#B88E2F] my-5 font-bold lg:text-[52px] lg:leading-[65px] left-16 lg:w-[430px] text-2xl">Discover Our New Collection</h1>
          <p className="text-[#333333] lg:text-[18px] font-medium lg:mb-12 mb-5 leading-6 lg:w-[480px] sm:text-sm text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="bg-[#B88E2F] uppercase font-bold text-[1rem] w-[222px] py-[25px] lg:mx-0 mx-auto block cursor-pointer text-white border-0 outline-0">buy now</button>
        </div>
      </div>
    </section>
  )
}

export default PrimaryHero;