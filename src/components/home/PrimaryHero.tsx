
const PrimaryHero = () => {
  return (
    <section className='bg-primary-hero-image h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover font-Poppins'>
      <div className="h-screen w-full flex justify-end items-center px-[58px]">
        <div className="w-5/12 bg-[#FFF3E3] border-r-8 shadow-sm pt-[62px] mt-[153px] pb-[37px] px-9">
          <span className="text-[1rem] font-medium tracking-[3px]">New Arrival</span>
          <h1 className="pt-1 pb-4 text-[#B88E2F] font-bold text-[52px] leading-[65px] left-16 w-[430px]">Discover Our New Collection</h1>
          <p className="text-[#333333] text-[18px] font-medium mb-12 leading-6 w-[480px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className="bg-[#B88E2F] uppercase font-bold text-[1rem] w-[222px] py-[25px] cursor-pointer text-white border-0 outline-0">buy now</button>
        </div>
      </div>
    </section>
  )
}

export default PrimaryHero;