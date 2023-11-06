import SecondaryHero from "../components/common/SecondaryHero"
import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import CheckoutForm from "../components/checkout/CheckoutForm";

const Checkout = () => {
    return (
        <>
            <SecondaryHero title="Checkout" logo={logo} />
            <CheckoutForm/>
            <FeaturesBar/>
        </>
    )
}

export default Checkout;