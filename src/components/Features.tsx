import SectionTitle from "./Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="core-competencies"
            paragraph="At International Fruit Hub, our competencies are the cornerstone of our success and the driving force behind our reputation for excellence in the fresh produce industry."
            center
          />

          <div className="grid mt-5 xs:justify-center xs:text-center xs:items-center grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
