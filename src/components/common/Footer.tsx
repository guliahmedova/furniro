import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 w-full h-full">
      <div className="lg:w-[1240px] mx-auto pt-[48px] lg:px-0 px-3">

        <div className="grid lg:grid-cols-3 lg:gap-16 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          <div>
            <span className="font-bold text-[24px]">Furniro.</span>
            <div className="lg:mt-[50px] font-medium text-[#9F9F9F] mt-6 text-sm lg:text-base">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>

          <div className="lg:flex lg:justify-between grid grid-cols-2 lg:mt-0 mt-10">
            <div className="flex flex-col">
              <span className="text-[#9F9F9F] font-medium lg:leading-[24px] text-lg">Links</span>
              <Link to="/" className="lg:block text-[#000000] font-medium mb-[46px] mt-[55px] text-sm lg:text-[1rem]">Home</Link>
              <Link to="/shop" className="lg:block text-[#000000] font-medium mb-[46px] text-sm lg:text-[1rem]">Shop</Link>
              <Link to="/about" className="lg:block text-[#000000] font-medium mb-[46px] text-sm lg:text-[1rem]">About</Link>
              <Link to="/contact" className="lg:block text-[#000000] font-medium text-sm lg:text-[1rem]">Contact</Link>
            </div>

            <div className="flex flex-col">
              <span className="text-[#9F9F9F] font-medium leading-[24px] text-lg">Help</span>
              <Link to="/paymentOptions" className="lg:block text-[#000000] font-medium mb-[46px] mt-[55px] text-sm lg:text-[1rem]">Payment Options</Link>
              <Link to="/returns" className="lg:block text-[#000000] font-medium mb-[46px] text-sm lg:text-[1rem]">Returns</Link>
              <Link to="/privacyPolicies" className="lg:block text-[#000000] font-medium text-sm lg:text-[1rem]">Privacy Policies</Link>
            </div>
          </div>

          <div className="lg:mt-0 mt-10 lg:mx-0 mx-auto w-fit">
            <span className="text-[#9F9F9F] font-medium text-base leading-[24px]">Newsletter</span>
            <form className="flex items-center lg:gap-[11px] lg:mt-[53px] mt-3 text-[14px] lg:leading-[21px]">
              <input type="email" placeholder="Enter Your Email Address" className="font-normal border-b border-[#000000] outline-0" />
              <button className="text-[#000000] uppercase border-b border-[#000000] font-medium">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="mt-[48px] text-[#000000] pb-9 lg:text-base text-sm lg:leading-[24px] border-t pt-[35px] border-[#D9D9D9] text-center lg:text-left">2023 furino. All rights reverved</div>
      </div>
    </footer>
  )
};

export default Footer;