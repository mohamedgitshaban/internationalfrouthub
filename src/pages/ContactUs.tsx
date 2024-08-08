import Breadcrumb from "../components/Common/Breadcrumb";
import Contact from "../components/Contact";
// import Contact from "../components/Contact";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

import { FaLocationDot } from "react-icons/fa6";

const ContactPage = () => {
  return (
    <div className="mt-20">
      <Breadcrumb
        pageName="Contact Us"
        description="For inquiries, please do not hesitate to contact us using the form below or by using the contact information provided."
      />
      <section id="features" className="mt-8">
        <div className="container">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 lg:grid-cols-3 items-baseline">
            <div className="text-center  grid grid-cols-1"><FaPhone className="text-center m-auto text-primary text-4xl"/>
            <a className="text-1xl mt-4" href="tel:+201005400407">Egypt Mobile : +201005400407 </a>
            </div>
            <div className="text-center grid grid-cols-1"><IoIosMail className="text-center m-auto text-primary text-5xl"/>
            <a className="text-1xl mt-4" href="mailto:info@internationalfruithub.com
">info@internationalfruithub.com
</a>
            {/* <a className="text-1xl" href="mailto:info@internationalfruithub.com
">info@internationalfruithub.com
</a> */}
</div>
            <div className="text-center  grid grid-cols-1 "><FaLocationDot className="text-center m-auto text-primary text-5xl"/>
            <a  className="text-[15px] mt-4" href="https://www.google.com/maps/place/10+Srabis,+Almazah,+Heliopolis,+Cairo+Governorate+4460376/@30.09639,31.339821,15z/data=!4m6!3m5!1s0x145815f1026341ad:0xc4ed2f9fe11d252c!8m2!3d30.0963898!4d31.3398206!16s%2Fg%2F11cpk_ddv7?hl=en&entry=ttu" target="_blank">Head Office: 95 Abu Bakr Al Seddek ST., Safir Square, Heliopolis, Cairo, Egypt</a>

            <a  className="text-[15px] mt-4" href="https://www.google.com/maps/place/Royal+House+Accounting/@25.2783123,55.3489828,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f5cf338e8d61f:0xd49e1f05d6b92284!8m2!3d25.2783075!4d55.3515631!16s%2Fg%2F11hbv8qhqg?entry=ttu" target="_blank">Regional Office: Office no. M16-163, Royal House Building,  HOR AL ANZ EAST Area, Dubai, UAE</a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default ContactPage;
