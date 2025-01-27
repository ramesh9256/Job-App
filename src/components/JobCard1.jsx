import React, { useRef } from "react";
import Slider from "react-slick";
import { FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function JobCard1() {
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
            logo: "https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png",
            jobTitle: "React Js Developer",
            location: "Bhopal",
            jobType: "Full time / onsite",
            payment: "Payment Not disclosed",
            applyLink: "#",
            viewLink: "#"
        },
        {
            logo: "https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png",
            jobTitle: "Node Js Developer",
            location: "Indore",
            jobType: "Part time / Remote",
            payment: "Payment Not disclosed",
            applyLink: "#",
            viewLink: "#"
        },
        {
            logo: "https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png",
            jobTitle: "Frontend Developer",
            location: "Bhopal",
            jobType: "Full time / onsite",
            payment: "Payment Not disclosed",
            applyLink: "#",
            viewLink: "#"
        },
        {
            logo: "https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png",
            jobTitle: "Backend Developer",
            location: "Pune",
            jobType: "Full time / onsite",
            payment: "Payment Not disclosed",
            applyLink: "#",
            viewLink: "#"
        }
    ];

    return (
        <div className="w-full bg-gray-100 p-5">
            <div className="flex justify-between items-center px-5 md:px-11 mb-10 w-[90%] lg:w-[80%] m-auto">
                <div>
                    <h1 className="text-black text-2xl md:text-4xl font-bold">Featured Jobs</h1>
                    <p className="text-gray-600 text-sm md:text-base">Your Job for a Future</p>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm md:text-base px-4 py-2 rounded-lg">
                    View All
                </button>
            </div>
            <Slider
                ref={sliderRef}
                {...settings}
                className="w-[90%] lg:w-[80%] m-auto gap-slider"
            >
                {jobData.map((job, index) => (
                    <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-auto">
                        {/* Header Section */}
                        <div className="flex justify-between items-center mb-5">
                            <img
                                src={job.logo}
                                alt="Company Logo"
                                className="h-16 w-16 object-contain"
                            />
                            <div className="text-right">
                                <p className="text-sm text-gray-500">{job.payment}</p>
                                <p className="text-sm bg-orange-600 text-white px-3 py-1 rounded-full mt-2">
                                    {job.jobType}
                                </p>
                            </div>
                        </div>
                        {/* Job Details */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 mb-4">{job.jobTitle}</h2>
                            <p className="flex items-center text-sm text-gray-600 gap-2 mb-3">
                                <FaMapMarkerAlt className="text-orange-500" />
                                <span>{job.location}</span>
                            </p>
                            <p className="text-sm text-gray-500">Immediate Joiner</p>
                        </div>
                        {/* Footer Section */}
                        <footer className="mt-6 flex justify-between items-center">
                            <a
                                href={job.applyLink}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                            >
                                Apply Now
                            </a>
                            <a
                                href={job.viewLink}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 "
                            >
                                View Job
                            </a>
                            <button className="text-gray-500 hover:text-red-500">
                                <FaHeart size={20} />
                            </button>
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

export default JobCard1;
