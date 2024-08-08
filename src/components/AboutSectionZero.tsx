
import { RiInstagramFill , RiFacebookFill , RiLinkedinFill} from "react-icons/ri";

const AboutSectionZero = () => {
    return (
      <section
          id="home"
          className="relative z-10 overflow-hidden bg-white dark:bg-gray-dark "
        >
          <div className="md:container">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 sm:py-12 md:px-12 md:py-24">
              <div className="flex flex-col  lg:flex-row">
                <div className="ww-full lg:w-2/3 p-10 prose relative"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100">
                  <h1 className="sm:text-5xl text-darkprimary font-bold xs:text-3xl leading-tight">Welcome to IFH,</h1>
  
                  <h1 className="sm:text-5xl xs:text-2xl text-gray-600"></h1>
  
                  {/* <h1 className="text-7xl text-gray-600"></h1> */}
  
  
                   <h1 className="sm:text-3xl xs:text-3xl text-gray-900 mt-3 "> Sourcing Freshness, Connecting the World!</h1>

                 <div className="flex xs:mb-16 md:m-0  flex-col justify-between h-[70%]">
                  <p className="sm:text-[15px] xs:text-xl text-gray-600 font-light mt-8 leading-relaxed">
                  We take immense pride in exporting the freshest fruits and vegetables, sourced from the finest farms in  Egypt. Our meticulous selection process ensures that only the best produce reaches our customers. Each item is carefully inspected for quality, ripeness, and flavor, ensuring that we meet the highest standards of excellence. 
                  </p>
                  <p className="sm:text-[15px] xs:text-xl text-gray-600 font-light mt-2 leading-relaxed">

                  From crisp onions and juicy oranges to vibrant leafy greens and succulent grapes,  we deliver nature's finest directly to you, preserving the freshness and nutritional value of every item.
                 </p>
                  <p className="text-[15px] text-gray-600 font-light mt-2 leading-relaxed">
                  Our commitment to quality and customer satisfaction makes us a trusted partner in providing top-tier produce to homes and businesses globally.
                  </p>
                  <h1 className="sm:text-[28px] text-gray-900 mt-3 font-myfont text-center">Cultivating Freshness, Harvesting Excellence.</h1>

                 </div>
                  <div className="mt-8   absolute bottom-10 m-auto w-full flex items-center ">
                   <div className="inline-flex gap-x-6 xs:mt-8 md:mt-0">
                   <a href="https://www.instagram.com/internationalfruithub/"><svg className="hover:fill-primary hover:scale-105 transition-all ease-out duration-200 w-8 h-8 fill-gray-600" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><title>instagram-logo-black-and-white</title><path d="M61.45,0C44.76,0,42.66.07,36.11.37A45.08,45.08,0,0,0,21.2,3.23a29.86,29.86,0,0,0-10.88,7.08,30.26,30.26,0,0,0-7.1,10.88A44.92,44.92,0,0,0,.37,36.11C.08,42.66,0,44.75,0,61.44S.07,80.21.37,86.77a45.08,45.08,0,0,0,2.86,14.91,30.12,30.12,0,0,0,7.08,10.88,30.13,30.13,0,0,0,10.88,7.1,45.17,45.17,0,0,0,14.92,2.85c6.55.3,8.64.37,25.33.37s18.77-.07,25.33-.37a45.17,45.17,0,0,0,14.92-2.85,31.54,31.54,0,0,0,18-18,45.6,45.6,0,0,0,2.86-14.91c.29-6.55.37-8.64.37-25.33s-.08-18.78-.37-25.33a45.66,45.66,0,0,0-2.86-14.92,30.1,30.1,0,0,0-7.09-10.88,29.77,29.77,0,0,0-10.88-7.08A45.14,45.14,0,0,0,86.76.37C80.2.07,78.12,0,61.43,0ZM55.93,11.07h5.52c16.4,0,18.34.06,24.82.36a34,34,0,0,1,11.41,2.11,19,19,0,0,1,7.06,4.6,19.16,19.16,0,0,1,4.6,7.06,34,34,0,0,1,2.11,11.41c.3,6.47.36,8.42.36,24.82s-.06,18.34-.36,24.82a33.89,33.89,0,0,1-2.11,11.4A20.35,20.35,0,0,1,97.68,109.3a33.64,33.64,0,0,1-11.41,2.12c-6.47.3-8.42.36-24.82.36s-18.35-.06-24.83-.36a34,34,0,0,1-11.41-2.12,19,19,0,0,1-7.07-4.59,19,19,0,0,1-4.59-7.06,34,34,0,0,1-2.12-11.41c-.29-6.48-.35-8.42-.35-24.83s.06-18.34.35-24.82a33.7,33.7,0,0,1,2.12-11.41,19,19,0,0,1,4.59-7.06,19.12,19.12,0,0,1,7.07-4.6A34.22,34.22,0,0,1,36.62,11.4c5.67-.25,7.86-.33,19.31-.34Zm38.31,10.2a7.38,7.38,0,1,0,7.38,7.37,7.37,7.37,0,0,0-7.38-7.37ZM61.45,29.89A31.55,31.55,0,1,0,93,61.44,31.56,31.56,0,0,0,61.45,29.89Zm0,11.07A20.48,20.48,0,1,1,41,61.44,20.48,20.48,0,0,1,61.45,41Z" /></svg></a>
  
  <a href="https://www.linkedin.com/company/international-fruit-hub/"><RiLinkedinFill className="hover:fill-primary hover:scale-105 transition-all ease-out duration-200 w-8 h-8 fill-gray-600" /></a>

  <a href="https://www.facebook.com/profile.php?id=61560597476904"><svg className="hover:fill-primary hover:scale-105 transition-all ease-out duration-200 w-8 h-8 fill-gray-600" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z" /></svg></a>

                   </div>
                  </div>

                </div>
                <div className="w-full lg:w-2/3 py-8 px-10 grid grid-cols-4 gap-2 "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100">
                  <div className="h-64 col-span-4 sm:col-span-4 relative">
  
                    <img 
                    src={require("../images/product/WhatsApp Image 2024-06-04 at 12.29.09 PM.jpeg")} 
                    alt="fresh beets" 
                    className="rounded-md absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />
  
                  </div>
  
                  <div className="h-64 col-span-4 sm:col-span-2 relative">
  
                    <img 
                    src={require("../images/product/WhatsApp Image 2024-06-04 at 12.29.45 PM (1).jpeg")} 
                    alt="red veggies" 
                    className="rounded-lg absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />
  
                  </div>
  
                  <div className="h-64 col-span-4 sm:col-span-2 relative">
  
                    <img 
                    src={require("../images/product/WhatsApp Image 2024-06-04 at 12.29.11 PM (1).jpeg")} 
                    alt="asperagas" 
                    className="rounded-sm absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />
  
                  </div>
  
                  <div className="h-64 col-span-4 sm:col-span-3 relative">
  
                    <img 
                    src={require("../images/product/WhatsApp Image 2024-06-04 at 12.29.11 PM.jpeg")}
                    alt="carrots" 
                    className="rounded-md absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200" />
  
                  </div>
  
                  <div className="h-64 col-span-4 sm:col-span-1 relative">
  
                    <img
                    src={require("../images/product/WhatsApp Image 2024-06-04 at 12.27.08 PM (2).jpeg")}
                    alt="tomato tomato" 
                    className="rounded-md absolute inset-0 h-full w-full object-cover hover:scale-[1.05] transition-all ease duration-200"
                    />
  
                  </div>
  
                </div>
              </div>
            </div>
          </div>
  
  
        </section>
    );
  };
  
  export default AboutSectionZero;
  