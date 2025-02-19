import Hero from "../components/Layout/Hero";
import GenderCollections from "../components/Products/GenderCollections";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollections/>
      <NewArrivals/>
    </div>
  );
};

export default Home;
