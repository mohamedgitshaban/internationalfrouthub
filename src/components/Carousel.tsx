import React, { useEffect, useRef, useState } from 'react';
import IMG1 from "../images/product/WhatsApp Image 2024-06-04 at 12.27.07 PM.jpeg";
import IMG2 from "../images/product/pexels-pixabay-106148.jpg";
import IMG3 from "../images/product/WhatsApp Image 2024-06-04 at 12.29.09 PM.jpeg";
import { Link } from 'react-router-dom';

const images = [
    { src: IMG1, author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" },
    { src: IMG2, author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" },
    { src: IMG3, author: "IFH", title: "INTERNATIONAL FRUIT HUB", topic: "FRUITS & VEGETABLES", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, architecto laborum! Earum quas iusto fugit. Iure veritatis magni maxime voluptatem!" },
    
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState("opacity-0");
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setFadeClass("opacity-0");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeClass("opacity-100");
        }, 1000);
    };

    const prevSlide = () => {
        setFadeClass("opacity-0");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setFadeClass("opacity-100");
        }, 1000);
    };

    const handleIndicatorClick = (index: number) => {
        setFadeClass("opacity-0");
        setTimeout(() => {
            setCurrentIndex(index);
            setFadeClass("opacity-100");
        }, 1000);
    };

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(nextSlide, 6000);
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [currentIndex]);

    useEffect(() => {
        setFadeClass("opacity-100");
    }, []);

    return (
        <div className="relative h-screen max-w-[100%] overflow-hidden">
            <div className="carousel relative w-full h-full">
                
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-1000 group ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-black opacity-50 group-hover:!opacity-0 bg-cover transition-all ease duration-300 w-full h-full absolute"></div>
                        <img src={image.src} className="w-full h-full object-cover" alt={image.title} />
                        <div className={`absolute xs:top-1/3 sm:top-1/4 md:right-1/2 transform  text-white xs:w-4/5 xs:right-[10%] md:max-w-xl transition-opacity
                            bg-gradient-to-br from-black/20 to-black/0 p-8 rounded-xl backdrop-blur-lg 
                             `}>
                            <div className="text-5xl font-bold my-4 transition-opacity duration-1000 delay-200 text-primary">Who are We?</div>
                            {/* <div className="text-5xl font-bold text-primary transition-opacity duration-1000 delay-500">FRUITS & VEGETABLES</div> */}
                            <div className="xs:text-[10px] md:text-[15px] mt-4 transition-opacity duration-1000 delay-700">Welcome to International Fruit Hub, your premier source for high-quality fruits and vegetables meticulously cultivated and harvested from the fertile lands of Egypt. Our commitment to excellence is reflected in every step of our process, from cultivation to delivery. At International Fruit Hub, we are dedicated to delivering the freshest and finest produce to markets around the globe.</div>
                            <div className="mt-8 flex justify-start space-x-4">
                                <Link to='/product' className="bg-white border-2 xs:text-[10px] md:text-[15px] border-white xs:text-center sm:text-left text-black px-10 py-3 sm:px-10 xs:px-8 xs:py-2 hover:bg-transparent hover:text-white transition-all ease-out duration-150">Explore our Produce variety!</Link>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleIndicatorClick(index)}
                            className={`w-4 h-4 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                        ></button>
                    ))}
                </div>

            </div>

            <div className="absolute top-0 left-0 h-1 bg-orange-600 transition-all duration-3000" style={{ width: `${(currentIndex + 1) / images.length * 100}%` }}></div>
        </div>
    );
};

export default Carousel;
