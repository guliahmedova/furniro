import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#e7e5e5] pt-12 mb-9">
      <div className="w-[85%] mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:px-0 px-3 lg:gap-0 gap-6">
          <div className="pr-6">
            <h1 className="text-2xl font-bold pb-11 block">Funiro.</h1>
            <p className="text-[#9F9F9F] max-w-fit block pr-3">400 University Drive Suite 200 Coral Gables,</p>
            <p className="text-[#9F9F9F]">FL 33134 USA</p>
          </div>
          <div>
            <span className="text-[#9F9F9F] font-medium pb-12 block">Links</span>
            <Link className="block font-medium w-fit mb-12" to="/">Home</Link>
            <Link className="block font-medium w-fit mb-12" to="/shop">Shop</Link>
            <Link className="block font-medium w-fit mb-12" to="/about">About</Link>
            <Link className="block font-medium w-fit mb-12" to="/contact">Contact</Link>
          </div>
          <div>
            <span className="text-[#9F9F9F] font-medium pb-12 block">Help</span>
            <Link className="block font-medium w-fit mb-12" to="/paymentOptions">Payment Options</Link>
            <Link className="block font-medium w-fit mb-12" to="/returns">Returns</Link>
            <Link className="block font-medium w-fit mb-12" to="/privacyPolicies">Privacy Policies</Link>
          </div>
          <div>
            <span className="text-[#9F9F9F] font-medium pb-12 block">Newsletter</span>
            <form className="flex gap-3">
              <input type="text" placeholder="Enter Your Email Address" className="border-b border-black outline-0 lg:text-base text-sm" />
              <button className="border-b border-black lg:font-medium text-sm">SUBSCRIBE</button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t pt-9 px-3">2023 furino. All rights reverved</div>
      </div>
    </footer>
  )
};

export default Footer;