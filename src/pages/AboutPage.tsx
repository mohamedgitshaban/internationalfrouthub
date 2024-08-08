

import AboutSectionOne from "../components/AboutSectionOne";
import AboutSectionTwo from "../components/AboutSectionTwo";
import AboutSectionZero from "../components/AboutSectionZero";
import Breadcrumb from "../components/Common/Breadcrumb";


const AboutPage = () => {
  return (
    <div className="mt-20">
      <Breadcrumb
        pageName="About Us Page"
        description=""
      />
      <AboutSectionZero />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
    </div>
  );
};

export default AboutPage;
