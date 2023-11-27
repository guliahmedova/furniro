import logo from '../assets/images/logo.svg';
import CartTotals from "../components/cart/CartTotals";
import { FeaturesBar, Reveal, SecondaryHero } from "../components/common/index";

const Cart = () => {
  return (
    <>
      <Reveal><SecondaryHero title="Cart" logo={logo} /></Reveal>
      <Reveal><CartTotals /></Reveal>
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Cart