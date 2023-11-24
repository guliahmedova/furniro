import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import CheckoutForm from "../components/checkout/CheckoutForm";
import SecondaryHero from '../components/common/SecondaryHero';
import Reveal from '../components/common/Reveal';

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