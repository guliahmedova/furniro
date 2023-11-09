import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import heart from '../../assets/images/heart.svg';
import search from '../../assets/images/search.svg';
import account from '../../assets/images/account.svg';
import openmenu from '../../assets/images/openmenu.svg';
import shopCart from '../../assets/images/shoppingCart.svg';
import closemenu from '../../assets/images/closemenu.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(()=> {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    }else if (!isMenuOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen])


  return (
    <header className="bg-white md:shadow-sm">
      <nav className="flex items-center font-medium justify-around">

        <Link to="/" className="md:w-auto w-full py-7 md:px-0 px-3 z-10 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <img src={logo} alt="" />
            <span className="font-bold md:text-[34px] text-2xl">Furniro</span>
          </div>
          <div className="w-6 cursor-pointer md:hidden z-10" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img src={isMenuOpen ? closemenu : openmenu} alt="" />
          </div>
        </Link>

        <div className="lg:flex hidden items-center gap-4 font-medium lg:gap-[75px] text-base">
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/'>Home</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/shop'>Shop</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/blog'>Blog</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/contact'>Contact</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden' to="/account">Account</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden' to="/search">Search</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden' to="/favorites">Favorites</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden' to="/cart">Cart</NavLink>
        </div>

        <div className="lg:flex hidden items-center lg:gap-11">
          <Link to="/account">
            <img src={account} alt="" />
          </Link>
          <Link to="/search">
            <img src={search} alt="" />
          </Link>
          <Link to="/favorites">
            <img src={heart} alt="" />
          </Link>
          <Link to="/cart">
            <img src={shopCart} alt="" />
          </Link>
        </div>

        {/* MOBILE NAVBAR */}
        <div className={`md:hidden bg-white text-2xl absolute w-full h-full bottom-0 py-32 pl-3 flex flex-col gap-12 duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}`}>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/'>Home</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/shop'>Shop</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/blog'>Blog</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to='/contact'>Contact</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to="/account">Account</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to="/search">Search</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to="/favorites">Favorites</NavLink>
          <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to="/cart">Cart</NavLink>
        </div>

      </nav>
    </header>
  )
}

export default Navbar