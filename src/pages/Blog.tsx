import SecondaryHero from "../components/common/SecondaryHero";
import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import BlogSection from "../components/blog/BlogSection";

const Blog = () => {
  return (
    <>
      <SecondaryHero title="Blog"  logo={logo} />
      <BlogSection/>
      <FeaturesBar/>
    </>
  )
}

export default Blog