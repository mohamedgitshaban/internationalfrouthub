import AboutSectionOne from "../components/AboutSectionOne";
import Brands from "../components/Brands";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import FeatProducts from "../components/FeaturedProducts";
import Features from "../components/Features";
import ScrollUp from "../components/ScrollUp";
import Index from "../components/Stats";


export default function Homepages() {
  return (
    <>
      <ScrollUp />
      <Carousel />
      <Features />
      <FeatProducts />
      {/* <Index/> */}
      <AboutSectionOne />
      {/* <Brands /> */}
      <Contact/>
      
    </>
  );
}
