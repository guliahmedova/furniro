import { Link } from "react-router-dom";

const PrimaryHero = () => {
  return (
    <section className='bg-primary-hero-image w-full bg-fixed bg-center bg-no-repeat bg-cover md:bg-top font-Poppins' style={{height: "100svh"}}>
      <div className="h-screen w-full flex lg:justify-end items-center lg:px-[58px] justify-center px-3">
        <div className=" bg-[#FFF3E3] border-r-8 shadow-sm pt-[62px] h-fit pb-[37px] lg:px-9 px-6 min-w-min">
          <span className="font-medium tracking-[3px]">New Arrival</span>
          <h1 className="pt-1 lg:mb-4 lg:mt-0 text-[#B88E2F] my-5 font-bold lg:text-[52px] lg:leading-[65px] left-16 lg:w-[430px] text-3xl">Discover Our New Collection</h1>
          <p className="text-[#333333] lg:text-[18px] font-medium lg:mb-12 mb-5 leading-6 lg:w-[480px] sm:text-sm text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Link to="/newProducts" className="bg-[#B88E2F] text-center uppercase font-bold lg:w-[222px] w-full py-[25px] lg:mx-0 mx-auto block cursor-pointer text-white border-0 outline-0">buy now</Link>
        </div>
      </div>
    </section>
  )
}

export default PrimaryHero;