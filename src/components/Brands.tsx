import { Brand } from "../types/brand";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16 mb-5">
      <div className="  m-auto w-11/12 md:container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center !p-12 rounded-sm bg-[#e0f5f1] px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-2/4 sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto xl:w-1/6 items-center justify-center p-3">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-28 mx-auto flex justify-center opacity-70 transition hover:opacity-100 hover:-translate-y-2"
      >
        {image}
      </a>
    </div>
  );
};
