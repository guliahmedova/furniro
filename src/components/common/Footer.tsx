import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2">
      <div className="w-[1240px] mx-auto pt-[48px] pb-[38px]">

        <div className="grid grid-cols-3 gap-16">
          <div>
            <span className="font-bold text-[24px]">Furniro.</span>
            <div className="mt-[50px] font-medium text-[#9F9F9F]">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="">
              <span className="text-[#9F9F9F] font-medium text-[1rem] leading-[24px]">Links</span>
              <Link to="/" className="block text-[#000000] font-medium mb-[46px] mt-[55px]">Home</Link>
              <Link to="/" className="block text-[#000000] font-medium mb-[46px]">Shop</Link>
              <Link to="/" className="block text-[#000000] font-medium mb-[46px]">About</Link>
              <Link to="/" className="block text-[#000000] font-medium">Contact</Link>
            </div>

            <div className="">
              <span className="text-[#9F9F9F] font-medium text-[1rem] leading-[24px]">Help</span>
              <Link to="/" className="block text-[#000000] font-medium mb-[46px] mt-[55px]">Payment Options</Link>
              <Link to="/" className="block text-[#000000] font-medium mb-[46px]">Returns</Link>
              <Link to="/" className="block text-[#000000] font-medium">Payment Options</Link>
            </div>
          </div>

          <div>
            <span className="text-[#9F9F9F] font-medium text-[1rem] leading-[24px]">Newsletter</span>
            <form className="flex items-center gap-[11px] mt-[53px] text-[14px] leading-[21px]">
              <input type="email" placeholder="Enter Your Email Address" className="font-normal border-b border-[#000000] outline-0" />
              <button className="text-[#000000] uppercase border-b border-[#000000] font-medium">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="mt-[48px] text-[#000000] font-normal text-[1rem] leading-[24px] border-t pt-[35px] border-[#D9D9D9]">2023 furino. All rights reverved</div>
      </div>
    </footer>
  )
};

export default Footer;