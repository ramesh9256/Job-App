import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Company() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const jobData = [
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Google",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Microsoft",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Amazon",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Facebook",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Apple",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "TCS",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Infosys",
      applyLink: "#",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9nS21qlQQmvlrWPL4kEixfNWurjN0vY1tvQ&s",
      jobTitle: "Wipro",
      applyLink: "#",
    },
  ];

  return (
    <div className="w-full bg-gray-50 p-8">
      <div className="flex justify-between items-center px-5 md:px-11 mb-10 w-[90%] lg:w-[80%] mx-auto">
        <div>
          <h1 className="text-black text-2xl md:text-4xl font-bold leading-tight">Featured Jobs</h1>
          <p className="text-gray-500 text-sm md:text-base">Your job for a brighter future</p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white text-sm md:text-base px-6 py-3 rounded-lg transition duration-300">
          View All
        </button>
      </div>
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-[90%] lg:w-[80%] mx-auto gap-slider"

      >
        {jobData.map((job, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 h-auto flex flex-col justify-center items-center"
          >
            {/* Header Section */}
            <div className="flex justify-center items-center mb-5">
              <img
                src={job.logo}
                alt="Company Logo"
                className="h-20 w-16 object-contain rounded-full"
              />
            </div>
            {/* Job Details */}
            <div className="text-center mb-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{job.jobTitle}</h2>
              <p className="text-sm text-gray-500">Click below to apply for this role</p>
            </div>
            {/* Footer Section */}
            <footer className="mt-4 flex justify-center items-center space-x-4">
              <Link
                to= "apply"
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 w-[90%] text-center"
              >
                Apply Now
              </Link>
            </footer>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .gap-slider .slick-slide {
          padding: 10px 15px;
        }
        .gap-slider .slick-list {
          margin: 0 -15px;
        }
      `}</style>
    </div>
  );
}

export default Company;
