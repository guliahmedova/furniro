import { useState } from "react";
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
  console.log("ismneuopen: ", isMenuOpen);

  return (
    <header className="w-full bg-white md:shadow-sm h-[100px]">
      <div className="absolute top-9 right-8 w-7 h-7 cursor-pointer md:hidden bg-white z-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <img src={closemenu} alt="" /> : <img src={openmenu} alt="" />}
      </div>
      <nav className='md:flex md:justify-between md:items-center md:flex-row flex-wrap mx-auto md:px-0 sm:px-5 w-full max-w-screen-xl py-[30px] flex-col'>

        <div className="flex items-center md:justify-start md:mb-0 md:mx-0 gap-1 cursor-pointer mb-9 ml-3">
          <img src={logo} alt="" />
          <span className="font-bold md:text-[34px] text-2xl">Furniro</span>
        </div>

        <div className={`flex items-center md:bg-transparent md:flex-row md:py-0 md:gap-[75px] md:pl-0 font-medium text-black text-[1rem] flex-col gap-8 pl-5 ease-in-out duration-700 md:h-auto py-3 md:translate-x-0 ${!isMenuOpen ? 'translate-x-[-700px] h-screen' : 'translate-x-0 h-screen bg-white'}`}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink className='md:hidden' to="/account">Account</NavLink>
          <NavLink className='md:hidden' to="/search">Search</NavLink>
          <NavLink className='md:hidden' to="/favorites">Favorites</NavLink>
          <NavLink className='md:hidden' to="/cart">Cart</NavLink>
        </div>

        <div className="md:flex md:items-center md:mt-0 md:gap-11 cursor-pointer hidden">
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

      </nav>
    </header>
  )
}

export default Navbar