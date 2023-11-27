import logo from '../assets/images/logo.svg';
import { FeaturesBar, SecondaryHero, Reveal } from "../components/common/index";
import CheckoutForm from "../components/checkout/CheckoutForm";

const Checkout = () => {
    return (
        <>
            <Reveal> <SecondaryHero title="Checkout" logo={logo} /></Reveal>
            <Reveal><CheckoutForm /></Reveal>
            <Reveal><FeaturesBar /></Reveal>
        </>
    )
}

export default Checkout;