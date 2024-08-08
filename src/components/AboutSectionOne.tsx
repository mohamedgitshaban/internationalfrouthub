import SectionTitle from "./Common/SectionTitle";
import Img1 from "../images/about/vegs1.png";
import { useRef } from "react";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (

  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-green-500 bg-opacity-10 text-green-500">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  const vidref=useRef<HTMLVideoElement>(null);
  return (
    <section id="international-fruit-hub" className="my-8 md:my-16 lg:my-16">
      <div className=" m-auto w-11/12">
        <div className="border-b border-body-color/[.15]  dark:border-white/[.15]   ">
          <div className="-mx-4 flex flex-wrap items-center">
          <div className="order-2 md:order-1 px-4 lg:w-1/2">
              <div className="relative mx-auto h-full aspect-[25/24] max-w-[500px] lg:mr-0">
                <div className='slider '>
    <video className="Video" ref={ vidref }  src={require("../images/product/WhatsApp Video 2024-06-04 at 12.29.56 PM.mp4")} playsInline loop autoPlay  muted />
    </div>
              </div>
            </div>
            <div className=" order-1 md:order-2 w-full px-4 lg:w-1/2">
              <SectionTitle
                title="International Fruit Hub: Exporting Fresh Fruits and Vegetables"
                paragraph="At International Fruit Hub, we are committed to providing a day-fresh range of fruits and vegetables to our clients worldwide. As pioneers in the field, we export premium quality produce to Europe, Africa, Asia, and Arab countries."
                mb="30px"
              />

              <div className="mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Expertise in Agriculture" />
                    <List text="Advanced Quality Control" />
                    <List text="Sustainable Farming Practices" />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Facilitating Logistics" />
                    <List text="Customer-Centric Approach" />
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
