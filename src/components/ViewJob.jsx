import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
    FaHeart,
    FaFacebook,
    FaInstagramSquare,
    FaTwitter,
    FaGithub,
} from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JobCard from "./JobCard";

const ViewJob = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const jobDetails = [
        ["Views", "7"],
        ["Applicants", "0"],
        ["Job Type", "Full Time / Onsite"],
        ["Salary", "Not Disclosed"],
        ["Post Date", "12 Apr, 2024"],
    ];

    const skills = [
        "Java",
        "Python",
        "C++",
        "MERN Stack",
        "Data Structure",
        "Database",
        "Management",
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-blue-600 text-white p-5 px-8 md:px-20 text-lg">
                <h1>
                    <Link
                        to="/"
                        className="hover:bg-white hover:text-blue-600 hover:rounded-lg px-3 py-1 transition-all duration-300"
                    >
                        Home
                    </Link>
                    <span> / Job Details</span>
                </h1>
            </div>

            {/* Main Section */}
            <div className="container mx-auto px-4 md:px-8 lg:px-16 mt-10">
                <div className="md:flex md:space-x-8">
                    {/* Main Content Section */}
                    <div className="md:w-2/3 bg-white p-6 rounded-lg shadow-md mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <img
                                src="https://jobx-app.vercel.app/static/media/logo1.db856b2a8ff723c5dd79.png"
                                alt="Company Logo"
                                className="w-16 h-16 object-contain mr-4"
                            />
                            <p className="text-gray-500 text-sm md:text-base">Full Time / Onsite</p>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Company Name</h1>
                        <p className="text-gray-700 flex items-center mb-4 text-sm md:text-base">
                            <FaLocationDot className="mr-2 text-xl" /> Location
                        </p>

                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Role of Employees</h2>
                        <p className="text-gray-700 text-sm md:text-base mb-4">Roles and Responsibilities</p>
                        <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                            <li>Assist with job postings, resume screening, and initial candidate screening.</li>
                            <li>Schedule interviews and coordinate communication by calling the candidates.</li>
                            <li>Calling the leads.</li>
                        </ul>

                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2">Qualifications and Skills</h3>
                            <p className="text-gray-700 text-sm md:text-base mb-4">
                                Currently pursuing a degree in Human Resources, Business Administration, or a related field (or recently graduated). Strong organizational skills with the ability to manage multiple tasks simultaneously. Good communication skills.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-xs md:text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                            <div className="flex justify-between text-sm md:text-base mb-4">
                                <span className="font-semibold">Availability:</span>
                                <span>Full Time / Onsite</span>
                            </div>
                            <div className="flex justify-between text-sm md:text-base mb-6">
                                <span className="font-semibold">Experience Level:</span>
                                <span>Fresher</span>
                            </div>

                            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <aside className="md:w-1/3 bg-white rounded-lg shadow-md h-full pb-4">  
                        <h1 className="text-xl font-bold mb-4 text-center bg-blue-600 text-white py-3 hover:bg-blue-700 transition cursor-pointer">
                            APPLY NOW
                        </h1>
                        <div className="space-y-4 p-4">
                            {jobDetails.map(([key, value]) => (
                                <div key={key} className="flex justify-between">
                                    <h3 className="font-semibold text-gray-800">{key}</h3>
                                    <p className="text-gray-600">{value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-4">
                            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-300 transition">
                                <span>Bookmark</span> <FaHeart />
                            </button>
                        </div>

                        <div className="flex items-center justify-center mt-8 space-x-4">
                            <a href="#" className="text-blue-500">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="text-pink-500">
                                <FaInstagramSquare className="text-2xl" />
                            </a>
                            <a href="#" className="text-blue-400">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-800">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a href="#" className="text-black">
                                <RiVercelFill className="text-2xl" />
                            </a>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Footer */}
            <div className="p-6 mt-10">
                <JobCard />
            </div>
        </div>
    );
};

export default ViewJob;
