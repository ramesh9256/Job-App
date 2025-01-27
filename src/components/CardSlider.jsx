import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, content, imgUrl, onClick }) => (
  <div
    className="flex-none w-64 mx-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden cursor-pointer"
    onClick={onClick} // Navigate to the respective route when clicked
  >
    {/* Image at the top */}
    <div className="w-full h-40">
      <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    {/* Text content */}
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{content}</p>
    </div>
  </div>
);

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, title: "Noida", content: "49 jobs", imgUrl: "https://jobx-app.vercel.app/static/media/noida.3fabae3d5f2fcac124d5.png" },
    { id: 2, title: "Jabalpur", content: "49 jobs", imgUrl: "https://jobx-app.vercel.app/static/media/jabalpur.30c05dbdc28287e5dd9c.png" },
    { id: 3, title: "Kolkata", content: "49 jobs", imgUrl: "https://jobx-app.vercel.app/static/media/kolkata.6fe209d921d634345bea.png" },
    { id: 4, title: "Bengaluru", content: "49 jobs", imgUrl: "https://jobx-app.vercel.app/static/media/Bengaluru.5b1620c4379a4f2a873c.png" },
    { id: 5, title: "Bhopal", content: "49 jobs", imgUrl: "https://jobx-app.vercel.app/static/media/bhopal.2c87af791a94fa10a21e.png" },
    { id: 6, title: "Gwalior", content: "49 jobs", imgUrl: "https://jobx-app.vercel.app/static/media/Gwalior.49ff4554ba1c777a2fc9.png" },
  ];

  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleCardClick = (location) => {
    navigate(`/view`); // Navigate to the dynamic jobs page
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    sliderRef.current.scrollTo({
      left: currentIndex * 288, // Card width + margin
      behavior: "smooth",
    });
  }, [currentIndex]);

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
        >
          &lt;
        </button>

        {/* Card Container */}
        <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar w-full p-4">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              imgUrl={card.imgUrl}
              onClick={() => handleCardClick(card.title)} // Pass the title as the location
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 z-10 p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
