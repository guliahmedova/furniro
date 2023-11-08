import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import ContactForm from "../components/contact/ContactForm";
import { lazy, Suspense } from "react";
const SecondaryHero = lazy(() => import('../components/common/SecondaryHero'));

const Contact = () => {
  return (
    <>
      <Suspense fallback="Loading..."><SecondaryHero title="Contact" logo={logo}/></Suspense>
      <ContactForm/>
      <FeaturesBar/>
    </>
  )
}

export default Contact