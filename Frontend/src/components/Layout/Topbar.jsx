import { useState, useEffect } from "react";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  const messages = [
    "We ship worldwide - Fast and reliable shipping!",
    "Limited-time offer: Get 10% off on your first order!",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      setCurrentMessage(messages[index === 0 ? 1 : 0]);
    }, 8000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="bg-red-700 text-white overflow-hidden">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Animated Text */}
        <div className="relative text-sm text-center flex-grow h-6 flex items-center justify-center overflow-hidden">
          <div className="w-full relative h-full">
            <span
              key={currentMessage}
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)", // Center the text horizontally
                animation: "slide 0.6s ease-in-out forwards",
              }}
              className="text-center w-full"
            >
              {currentMessage}
            </span>
          </div>
        </div>

        <div className="text-sm hidden md:block">
          <a href="tel:+123456789" className="hover:text-gray-300">
            + (234) 567-890
          </a>
        </div>
      </div>

      {/* Inline CSS for Slide Animation */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(100%) translateX(-50%);
              opacity: 0;
            }
            50% {
              transform: translateX(-10%) translateX(-50%);
              opacity: 1;
            }
            100% {
              transform: translateX(0) translateX(-50%);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Topbar;
