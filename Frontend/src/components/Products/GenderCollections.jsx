import { Link } from "react-router-dom";
import mensColection from "../../assets/mens-collection.jpg";
import womensColection from "../../assets/womens-collection.jpg";

const GenderCollections = () => {
  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        <div className="relative flex-1">
          <img
            src={womensColection}
            alt="Women's Collection"
            className="w-full h-[450px] sm:h-[600px] md:h-[550px] lg:h-[600px] object-cover object-top"
          />
          <div className="absolute bottom-8 left-8 bg-white/60 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women&apos;s Collections
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative flex-1">
          <img
            src={mensColection}
            alt="Men's Collection"
            className="w-full h-[450px] sm:h-[600px] md:h-[550px] lg:h-[600px] object-cover object-top"
          />
          <div className="absolute bottom-8 left-8 bg-white/60 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men&apos;s Collections
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollections;
