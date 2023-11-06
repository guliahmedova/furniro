import { NavLink, Link } from "react-router-dom";
import logo from '../../assets/images/logo.svg';
import account from '../../assets/images/account.svg';
import search from '../../assets/images/search.svg';
import heart from '../../assets/images/heart.svg';
import shopCart from '../../assets/images/shoppingCart.svg';


const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="flex justify-between items-center flex-wrap mx-auto w-full max-w-screen-xl py-[20px]">

        <div className="flex items-center gap-1 cursor-pointer">
          <img src={logo} alt="" />
          <span className="font-bold text-[34px]">Furniro</span>
        </div>

        <div className="flex items-center gap-[75px] font-medium text-black text-[1rem]">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/shop'>Shop</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </div>

        <div className="flex items-center gap-11 cursor-pointer">
          <Link to="/account">
            <img src={account} alt="" />
          </Link>
          <Link to="/search">
            <img src={search} alt="" />
          </Link>
          <Link to="/">
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