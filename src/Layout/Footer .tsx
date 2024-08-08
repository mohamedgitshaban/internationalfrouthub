import {Link} from "react-router-dom";
import { RiInstagramFill , RiFacebookFill , RiLinkedinFill} from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <section className="bg-darkprimary">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2 hover:scale-110  transition-all ease duration-300">
                <Link to="/" className="text-base leading-6 text-white hover:text-opacity-80">
                    Home
                </Link>
            </div>
            <div className="px-5 py-2 hover:scale-110  transition-all ease duration-300">
                <Link to="/about" className="text-base leading-6 text-white hover:text-opacity-80">
                    About Us
                </Link>
            </div>
            <div className="px-5 py-2 hover:scale-110  transition-all ease duration-300">
                <Link to="/blog" className="text-base leading-6 text-white hover:text-opacity-80">
                    Products
                </Link>
            </div>
            <div className="px-5 py-2 hover:scale-110  transition-all ease duration-300">
                <Link to="/services" className="text-base leading-6 text-white hover:text-opacity-80">
                    Services
                </Link>
            </div>
            <div className="px-5 py-2 hover:scale-110  transition-all ease duration-300">
                <Link to="/contact" className="text-base leading-6 text-white hover:text-opacity-80">
                    Contact Us
                </Link>
            </div>

        </nav>
        <div className="flex justify-center items-center mt-8 gap-2">
            <a href="https://www.instagram.com/internationalfruithub/" target="_blank" className="text-white m-7 text-3xl font-5xl hover:primary hover:scale-110  transition-all ease duration-200">
                {/* <span className="sr-only">Facebook</span> */}
                <RiInstagramFill  />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61560597476904" target="_blank" className="text-white m-7 text-3xl hover:primary hover:scale-110  transition-all ease duration-200">
                {/* <span className="sr-only">Instagram</span> */}
                <RiFacebookFill/>
            </a>
            <a href="https://www.linkedin.com/company/international-fruit-hub/" target="_blank" className="text-white m-7 text-3xl hover:prim ary hover:scale-110  transition-all ease duration-200">
                {/* <span className="sr-only">Twitter</span> */}
                <RiLinkedinFill />
            </a>
          
        </div>
        <p className="mt-8 text-base leading-6 text-center text-white">
            © 2024 International Fruit Hub, LLC - All rights reserved.
        </p>
    </div>
</section>
    </>
  );
};

export default Footer;
