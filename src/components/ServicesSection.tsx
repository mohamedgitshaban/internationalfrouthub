import SingleServicesSection from "./SingleServicesSection";
import { Services } from "../types/services";
import { useEffect, useState } from "react";

async function fetchServices() {
  const res = await fetch('https://api.internationalfruithub.com/api/v1/services'); 
  if (!res.ok) {
    throw new Error('Failed to fetch services');
  }
  return res.json();
}

const ServicesSection = () => {
  const [stats, setStats] = useState<{ status: string; data: Services[] }>({ status: "", data: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getServices = async () => {
      try {
        const data = await fetchServices();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getServices();
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3">
            {stats.status == "200" ? (
              stats.data.map((feature: Services) => (
                <SingleServicesSection key={feature.id} feature={feature} />
              ))
            ) : (
              <>There is No Data</>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
