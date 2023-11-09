import React from 'react';
import logo from '../assets/images/logo.svg';
import FeaturesBar from "../components/common/FeaturesBar";
import BlogSection from "../components/blog/BlogSection";
const LazySecondaryHero = React.lazy(() => import('../components/common/SecondaryHero'));

const Blog = () => {
  return (
    <>
      <React.Suspense fallback="Loading...">
        <LazySecondaryHero title="Blog" logo={logo} />
      </React.Suspense>
      <BlogSection />
      <FeaturesBar />
    </>
  )
}

export default Blog