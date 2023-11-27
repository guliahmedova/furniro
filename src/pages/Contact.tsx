import logo from '../assets/images/logo.svg';
import { FeaturesBar, SecondaryHero, Reveal } from "../components/common/index";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Reveal> <SecondaryHero title="Contact" logo={logo} /></Reveal>
      <Reveal><ContactForm /></Reveal>
      <Reveal><FeaturesBar /></Reveal>
    </>
  )
}

export default Contact