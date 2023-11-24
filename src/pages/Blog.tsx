import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import BlogSection from "../components/blog/BlogSection";
import SecondaryHero from '../components/common/SecondaryHero';
import Reveal from '../components/common/Reveal';

const Blog = () => {
  return (
    <>
      <Reveal>
        <SecondaryHero title="Blog" logo={logo} />
      </Reveal>
      <Reveal>
        <BlogSection />
      </Reveal>
      <Reveal>
        <FeaturesBar />
      </Reveal>
    </>
  )
}

export default Blog;