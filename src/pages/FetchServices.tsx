
import Breadcrumb from "../components/Common/Breadcrumb";
import ServicesSection from "../components/ServicesSection";


const FetchServices = () => {
  return (
    <div className="mt-20">
      <Breadcrumb
        pageName="Our Services"
        description="At International Fruit Hub, we provide expert negotiation facilitation, seamless market connections, and comprehensive market insights. Our deep industry expertise and advanced technology ensure fair, profitable deals, efficient supply chains, and strategic decisions that drive business success in the dynamic fruit trading market."
      />
      <ServicesSection />
    
    </div>
  );
};

export default FetchServices;
