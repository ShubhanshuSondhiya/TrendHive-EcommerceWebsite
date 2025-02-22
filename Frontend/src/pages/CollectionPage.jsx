import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sideBarRef = useRef(null);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function handleClickOutside(e) {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: 1,
          name: "Product 1",
          price: 100,
          images: [{ url: "https://picsum.photos/id/299/500/500" }],
        },
        {
          _id: 2,
          name: "Product 2",
          price: 100,
          images: [{ url: "https://picsum.photos/id/241/500/500" }],
        },
        {
          _id: 3,
          name: "Product 3",
          price: 100,
          images: [{ url: "https://picsum.photos/id/232/500/500" }],
        },
        {
          _id: 4,
          name: "Product 4",
          price: 100,
          images: [{ url: "https://picsum.photos/id/268/500/500" }],
        },
        {
          _id: 5,
          name: "Product 5",
          price: 100,
          images: [{ url: "https://picsum.photos/id/239/500/500" }],
        },
        {
          _id: 6,
          name: "Product 6",
          price: 100,
          images: [{ url: "https://picsum.photos/id/251/500/500" }],
        },
        {
          _id: 7,
          name: "Product 7",
          price: 100,
          images: [{ url: "https://picsum.photos/id/242/500/500" }],
        },
        {
          _id: 8,
          name: "Product 8",
          price: 100,
          images: [{ url: "https://picsum.photos/id/240/500/500" }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center "
      >
        <FaFilter className="mr-2" /> Filters
      </button>
      <div
        ref={sideBarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="grow p-4 ">
        <h2 className="text-2xl uppercase mb-4">All Colection</h2>
        <SortOptions />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
