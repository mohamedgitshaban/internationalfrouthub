import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/Common/Breadcrumb";

async function fetchService(id: string | undefined) {
  const res = await fetch(`https://api.internationalfruithub.com/api/v1/services/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch service');
  }
  return res.json();
}

const SingleService = () => {
  const { id } = useParams();
  const [service, setService] = useState<{ status: string, data: { img: string, title: string, decription: string } | null }>({ status: "", data: null });
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getService = async () => {
      try {
        const data = await fetchService(id);
        setService(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getService();
  }, [id]);

  if (loading) {
    return <div></div>;
  }

  if (!service.data) {
    return <div>There is no data</div>;
  }

  return (
    <section className="pb-[120px] pt-[150px]">
      <Breadcrumb
        pageName="Service scope"
        description="Know more details about our offered services to be able to know us better."
      />
      <div className=" mt-12 container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 lg:w-8/12">
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                {service.data.title}
              </h2>
              <div>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <img
                      src={`http://api.internationalfruithub.com${service.data.img}`}
                      alt="service"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  {service.data.decription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleService;
