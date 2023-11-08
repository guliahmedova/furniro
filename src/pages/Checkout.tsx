import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import CheckoutForm from "../components/checkout/CheckoutForm";
import { lazy, Suspense } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Checkout = () => {
    return (
        <>
            <Suspense fallback="Loading..."> <SecondaryHero title="Checkout" logo={logo} /></Suspense>
            <CheckoutForm />
            <FeaturesBar />
        </>
    )
}

export default Checkout;