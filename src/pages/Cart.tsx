import logo from '../assets/images/logo.svg';
import CartTotals from "../components/cart/CartTotals";
import FeaturesBar from "../components/common/FeaturesBar";
import Reveal from '../components/common/Reveal';
import SecondaryHero from '../components/common/SecondaryHero';

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