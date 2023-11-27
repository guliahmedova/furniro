import logo from '../assets/images/logo.svg';
import { FeaturesBar, SecondaryHero, Reveal } from "../components/common/index";
import BlogSection from "../components/blog/BlogSection";

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