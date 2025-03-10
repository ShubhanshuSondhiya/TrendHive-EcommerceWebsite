import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={hero}
        alt="TrendHive"
        className="w-full h-[90vh] md:h-[85vh] lg:h-[90vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-7xl md:text-9xl tracking-tighter uppercase mb-4">
            vacation
            <br />
            Ready
          </h1>
          <p className="md:text-lg mb-6">
            Explore our vacation-ready outfits with worldwide shipping.
          </p>
          <Link to="collections/all?category=Bottom%20Wear">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-red-700 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Shop Now
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
