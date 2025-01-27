import React from 'react';
import { PiGreaterThan } from 'react-icons/pi';

const Offer = () => {
  return (
    <div className="py-12 bg-gray-50">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">What We Offer</h2>
        <p className="text-gray-600 text-lg">Offering the Best Deal</p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Searching the Best Jobs
              </h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <p className="text-blue-500 flex items-center space-x-2 font-semibold cursor-pointer hover:underline">
                <span>Learn More</span>
                <PiGreaterThan />
                <PiGreaterThan />
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Offer;
