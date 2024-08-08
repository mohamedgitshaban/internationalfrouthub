import SectionTitle from "./Common/SectionTitle";
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const FeatProducts = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 430) {
        setSlidesPerView(1);
      } else if (width <= 600) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(5);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="!bg-white mb-40">
      <div className="flex items-center pt-20 justify-center">
        <span className="font-semibold uppercase text-primary">
        <SectionTitle
            title="Our Produce Selections"
            paragraph="At International Fruit Hub, we offer a wide range of premium fresh produce to cater to the diverse needs of our global clients."
            center
          />
        </span>
      </div>
      {/* <HorizontalScrollCarousel /> */}
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-72 mt-10"
      >
        {cards.map((card) => {
            return <SwiperSlide
            key={card.id}
            className=" relative group"
          >
            <div
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}${card.url})`, // Updated to use process.env.PUBLIC_URL
                // backgroundSize: "content",
                
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"

              }}
              className=" absolute h-full w-full bg-contain	 duration-300 group-hover:scale-110 "
            ></div>
            <div className="h-full hidden w-full flex justify-center absolute z-50  items-center ease-in-out duration-300 group-hover:inline-flex ">
              <p className="bg-slate-500 bg-opacity-45 text-2xl py-6 px-12 font-bold text-white "> 
                {card.title}
              </p>
            </div>
            </SwiperSlide>;
          })}
        
      </Swiper>
    </div>
  );
};

export default FeatProducts;

const cards = [
  {
    url: "/images/blog/strawberry.png",
    title: "Strawberry",
    id: 1,
  },

  {
    url: "/images/blog/grapes.png",
    title: "Grapes",
    id: 3,
  },
  {
    url: "/images/blog/garlic.png",
    title: "Garlic",
    id: 5,
  },
  {
    url: "/images/blog/beans.png",
    title: "Beans",
    id: 6,
  },
  {
    url: "/images/blog/onions.png",
    title: "Onions",
    id: 7,
  },
  // New items
  {
    url: "/images/blog/artichoke.png",
    title: "Artichoke",
    id: 8,
  },
  {
    url: "/images/blog/cauliflower.png",
    title: "Cauliflower",
    id: 9,
  },
  {
    url: "/images/blog/jute.png",
    title: "Jute Leaves",
    id: 10,
  },
  {
    url: "/images/blog/okra.png",
    title: "Okra",
    id: 11,
  },
  {
    url: "/images/blog/mango.png",
    title: "Mango",
    id: 12,
  },
  {
    url: "/images/blog/peas.png",
    title: "Peas",
    id: 13,
  },
  {
    url: "/images/blog/spinach.png",
    title: "Spinach",
    id: 14,
  },
];
