import SecondaryHero from "../components/common/SecondaryHero";
import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import CartTotals from "../components/cart/CartTotals";

const Cart = () => {
  return (
    <>
        <SecondaryHero title="Cart" logo={logo} />
        <CartTotals/>
        <FeaturesBar/>
    </>
  )
}

export default Cart