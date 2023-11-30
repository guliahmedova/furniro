import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { useModal } from "../../contexts/ModalContext";
import logo from '../../assets/images/logo.svg';
import heart from '../../assets/images/heart.svg';
import search from '../../assets/images/search.svg';
import account from '../../assets/images/account.svg';
import openmenu from '../../assets/images/openmenu.svg';
import closemenu from '../../assets/images/closemenu.svg';
import shopCart from '../../assets/images/shoppingCart.svg';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const wishlistproducts = useSelector((state: RootState) => state.wishlist.product);

  const { openModal } = useModal();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);


  return (
    <header className="bg-white md:shadow-sm">
      <nav className="flex items-center font-medium justify-around">

        <div className="lg:w-auto w-full py-7 lg:px-0 px-3 z-20 flex justify-between items-center">
          <Link to="/" className="flex items-center w-fit gap-1">
            <img src={logo} alt="logo" />
            <span className="font-bold md:text-[34px] text-2xl">Furniro</span>
          </Link>
          <div className="w-6 cursor-pointer lg:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? closemenu : openmenu} alt="menu-icon" />
          </div>
        </div>

        <div className="lg:flex hidden items-center gap-4 font-medium lg:gap-[75px] text-base">
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} to='/shop'>Shop</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} to='/blog'>Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} to='/contact'>Contact</NavLink>
        </div>

        <div className="lg:flex hidden items-center lg:gap-11">
          <Link to="/account">
            <img src={account} alt="account-icon" />
          </Link>
          <Link to="/search">
            <img src={search} alt="search-icon" />
          </Link>
          <Link to="/favorites" className="relative">
            {wishlistproducts.length > 0 &&
              <div className="absolute -top-1 -right-1 bg-[#B88E2F] text-white text-center rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                {wishlistproducts.length > 9 ? <span>9+</span> : <span>{wishlistproducts.length}</span>}
              </div>}
            <img src={heart} alt="heart-icon" />
          </Link>
          <div onClick={openModal} className="cursor-pointer">
            <img src={shopCart} alt="shopcart-icon" />
          </div>
        </div>

        {/* MOBILE NAVBAR */}
        <div className={`lg:hidden bg-white text-2xl absolute z-20 w-full h-full bottom-0 py-32 pl-3 flex flex-col gap-10 duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to='/shop'>Shop</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to='/blog'>Blog</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to='/contact'>Contact</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to="/account">Account</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to="/search">Search</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to="/favorites">Favorites</NavLink>
          <NavLink className={({ isActive }) => isActive ? "font-bold underline decoration-slate-300" : ""} onClick={() => setIsMenuOpen(!isMenuOpen)} to="/cart">Cart</NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Navbar