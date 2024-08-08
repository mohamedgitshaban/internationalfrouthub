import { Link } from "react-router-dom";
import { Product } from "../types/Product";
interface SinProduct {
    id: number;
    title: string;
    description: string;
    type: string;
    colortheame: string;
    img: string; // Ensure this matches the property name
   
  }
  interface ProductCardProps {
    product: SinProduct; // Assuming SinProduct is the correct type for the product
  }
  
  const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    // Use the correct property name for the image URL
    // const imageUrl = product.img ? `http://api.internationalfruithub.com${product.img}` : '/path/to/default/image.jpg';
  
    return (
      <Link to={`/product/${product.id}`}>
        <div className="flex-shrink-0 m-6 flex flex-col justify-around items-center relative bg-primary bg-opacity-25 h-[350px] rounded-lg max-w-xs shadow-lg group hover:scale-95 transition-all ease-out duration-500">
          <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform h-full">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 z-10" style={{ background: "radial-gradient(black, transparent 60%)", transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)", opacity: 0.2 }}></div>
            <img className="relative w-40 object-center" src={`http://api.internationalfruithub.com${product.img}`} alt={product.title} />
          </div>  
          <span className="absolute top-0 right-0 text-center justify-center bg-neutral-50 rounded rounded-br-none rounded-bl-2xl rounded-tl-none text-primary text-sm capitalize font-bold px-3 py-2 leading-none items-center">
            {product.type}
          </span>
          <div className="relative flex-grow flex items-end text-primary px-6 pb-6 mt-6">
            <div className="flex flex-col text-center justify-center items-center gap-4">
              <span className="text-xl font-semibold uppercase">{product.title}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  
  export default ProductCard;
  