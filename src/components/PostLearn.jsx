import React from "react";
import { Link } from "react-router-dom";

const PostLearn = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="bg-black text-white p-5 pl-5 md:pl-20 text-lg">
        <h1>
          <Link
            to="/"
            className="hover:bg-white hover:text-black hover:rounded-lg p-2 transition-all duration-300"
          >
            Home
          </Link>
          <span> / Promotion</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-10">
        {/* Title */}
        <div className="text-center mt-8 md:mt-12">
          <h1 className="border-b-4 border-red-500 text-2xl md:text-4xl inline-block pb-3 font-bold text-gray-800">
            Post Job
          </h1>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <img
            src="https://jobx-app.vercel.app/static/media/learn.2ebcc4c29c8087bb4e5f.jpg"
            alt="Learn More"
            className="rounded-xl shadow-lg w-full max-w-lg md:max-w-3xl"
          />
        </div>

        {/* Text Content */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
          {/* Quick and Easy */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Quick and Easy Way to Advertise
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              If you're looking to fill open positions with qualified and
              competent workers, Jobxpro is your best bet.
            </p>
          </div>

          {/* Hire for Your Company */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Hire for Your Company
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Simply post your work specifications and due dates on our
              platform. You will be updated on the status of application
              submissions as they come in.
            </p>
          </div>

          {/* Reach Out to Qualified Matches */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
              Reach Out to Qualified Matches
            </h3>
            <p className="text-gray-700 text-sm md:text-base">
              Get in touch with good fits by sorting out candidates using
              different criteria. There is no extra work or inconvenience
              involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostLearn;
