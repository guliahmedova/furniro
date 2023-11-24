import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import ContactForm from "../components/contact/ContactForm";
import SecondaryHero from '../components/common/SecondaryHero';
import Reveal from '../components/common/Reveal';

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