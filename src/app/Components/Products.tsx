import Image from "next/image";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Link from "next/link";

interface Product {
  title: string;
  price: string;
  oldprice?: string;
  image: string;
  rating: number;
  reviews: string;
}

const products: Product[] = [
  {
    title: "The North Coat",
    price: "$260",
    oldprice: "$360",
image:'/images/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1 (1).png',
    rating: 5,
    reviews: "65",
  },
  {
    title: "Gucci duffle bag",
    price: "$960",
    oldprice: "$1160",
    image: "/images/Frame 606.png",
    rating: 4,
    reviews: "65",
  },
  {
    title: "RGB liquid CPU Cooler",
    price: "$160",
    oldprice: "$170",
    image: "/images/Frame 610.png",
    rating: 4,
    reviews: "65",
  },
  {
    title: "Small BookShelf",
    price: "$360",
    oldprice: "$150",
    image: "/images/Frame 612 (1).png",
    rating: 4,
    reviews: "65",
  },
];


const ProductBox = ({ product }: { product: Product }) => (
    <div className="w-[220px]">
      <div
        className="group shadow-md bg-neutral-200 w-full
          h-[180px] flex justify-center items-center relative cursor-pointer"
      >
        <Image
          src={product.image}
          width={150}
          height={100}
          alt={product.title}
          className="object-contain transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex flex-col items-center gap-2">
          <FaRegHeart className="text-red-500" />
          <FaRegEye className="text-blue-500" />
        </div>
        <button
          className="w-full absolute bottom-0 bg-black text-white px-4 py-1 rounded-sm 
              opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Add to Cart
        </button>
      </div>
      <h1 className="font-bold pt-2 text-lg text-center">{product.title}</h1>
      <div className="flex items-center justify-center space-x-2">
        <span className="text-green-500 font-bold">{product.price}</span>
        {product.oldprice && (
          <span className="line-through text-gray-500">{product.oldprice}</span>
        )}
      </div>
      <div className="flex items-center justify-center space-x-1 text-yellow-400 mt-2">
        {[...Array(5)].map((_, index) =>
          index < product.rating ? (
            <FaRegStar key={index} />
          ) : (
            <FaRegStar key={index} className="text-gray-300" />
          )
        )}
        <span className="text-gray-600 ml-2">{product.reviews} reviews</span>
      </div>
    </div>
  );
  
  const Products = () => {
    return (
      <div className="w-full flex flex-col items-center mt-10 mb-2 px-5">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col">
            <h3
              className="text-red-500 font-bold border-l-4 border-red-400
                  pl-3 ml-1"
            >
              This Month
            </h3>
            <div className="flex justify-between items-center">
              <h1 className="text-slate-800 font-bold text-2xl pt-4">
                Best Selling Products
              </h1>
              <Link
                href="#products"
                className="bg-red-500 text-white hover:bg-red-700 px-4 py-2 h-10 rounded"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-between mt-8 gap-5">
            {products.map((product, index) => (
              <ProductBox key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;
  
   
