import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import CartTotals from "../components/cart/CartTotals";
import { lazy, Suspense } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Cart = () => {
  return (
    <>
      <Suspense fallback="Loading">
        <SecondaryHero title="Cart" logo={logo} />
      </Suspense>
      <CartTotals />  
      <FeaturesBar />
    </>
  )
}

export default Cart