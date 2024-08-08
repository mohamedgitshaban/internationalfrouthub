'use client'
import React from 'react';
import CountUp from 'react-countup';
import { PiFarm } from "react-icons/pi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { LuContainer } from "react-icons/lu";

const stats = [
  {
    icon: <PiFarm className='m-auto text-darkprimary'/>,
    num: 500 ,
    text: "Local Farmers"
  },
  {
    icon: <AiOutlineCustomerService className='m-auto text-darkprimary'/>,
    num: 100 ,
    text: "Customers Served"
  },
  {
    icon: <LuContainer className='m-auto text-darkprimary'/>    ,
    num: 250 ,
    text: "Containers Sold"
  }
];

const Index: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="md:!flex md:flex-row xs:flex-col flex-wrap gap-7 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div className='flex-1 flex felx-col xs:flex-col gap-6 items-center mt-4 justify-between xl:justify-between' key={index}>
              <div>
              <div  className='text-7xl m-1 text-center w-full '>{item.icon}</div>
              <CountUp end={item.num} duration={5} delay={2} className='text-3xl xl:text-4xl m-1 font-extrabold '/> <span className='text-3xl xl:text-4xl font-extrabold '>+</span>
              </div>
              <p className='flex text-2xl m-1 text-right text-darkprimary font-bold'>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Index;
