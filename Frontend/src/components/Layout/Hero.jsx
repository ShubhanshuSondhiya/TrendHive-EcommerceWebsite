import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={hero}
        alt="TrendHive"
        className="w-full h-[75vh] md:h-[85vh] lg:h-[90vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-7xl md:text-9xl tracking-tighter uppercase mb-4">
            vacation
            <br />
            Ready
          </h1>
          <p className="text-sm tracking-tight md:text-lg mb-6">
            Explore our vacation-ready outfits with worldwide shipping.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
