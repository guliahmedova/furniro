import SecondaryHero from "../components/common/SecondaryHero"
import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <SecondaryHero title="Contact" logo={logo}/>
      <ContactForm/>
      <FeaturesBar/>
    </>
  )
}

export default Contact