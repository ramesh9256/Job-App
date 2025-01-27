import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaThList, FaThLarge, FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const View = () => {
    let arr = ["React Js Developer", "Content Developer", "Web Developer"];

    return (
        <div className="mb-5">
            {/* Header */}
            <div className="bg-black text-white p-5 pl-5 md:pl-20 text-lg">
                <h1>
                    <Link
                        to="/"
                        className="hover:bg-white hover:text-black hover:rounded-lg p-2 transition-all duration-300"
                    >
                        Home
                    </Link>
                    <span> / More Jobs / Center Name</span>
                </h1>
            </div>

            {/* Main Content */}
            <div className="mt-5 mx-auto w-[95%] lg:w-[90%] flex flex-col lg:flex-row justify-between gap-10">
                {/* Filters Section */}
                <aside className="lg:w-[30%] w-full border-2 border-gray-300 rounded-lg bg-white shadow-md p-5">
                    {/* Filters Header */}
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                        <p className="font-bold text-lg">Filters</p>
                        <p className="text-orange-500 cursor-pointer text-sm">Clear All</p>
                    </div>

                    {/* Skills Filter */}
                    <div className="border-b border-gray-300 py-4">
                        <p className="font-bold mb-2">Skills</p>
                        <select className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">--Select a skill--</option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="React">React</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Availability Filter */}
                    <div className="border-b border-gray-300 py-4">
                        <p className="font-bold mb-2">Availability</p>
                        <div className="space-y-2">
                            {[
                                "Full Time",
                                "Part Time",
                                "Internship",
                                "Remote",
                                "On-Site",
                            ].map((type) => (
                                <label
                                    key={type}
                                    className="flex items-center space-x-2 text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        className="rounded-full w-4 h-4 border-gray-300 focus:ring-0 checked:bg-orange-500 cursor-pointer"
                                    />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Category, Experience, Location Filters */}
                    {["Category", "Experience", "Location"].map((filter) => (
                        <div key={filter} className="border-b border-gray-300 py-4">
                            <p className="font-bold mb-2">{filter}</p>
                            <select className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">{`--Select ${filter}--`}</option>
                                <option value="Developer">Developer</option>
                                <option value="Fresher">Fresher</option>
                                <option value="Location">Location</option>
                            </select>
                        </div>
                    ))}

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition">
                        Search Now
                    </button>
                </aside>

                {/* Job Listings Section */}
                <div className="lg:w-[70%] w-full space-y-10">
                    {/* Search Bar */}
                    <div className="flex flex-wrap justify-between items-center gap-4 border-b-2 pb-3 border-gray-300">
                        <p className="text-lg font-semibold">Jobs</p>
                        <div className="flex items-center border border-gray-300 rounded-md w-full lg:w-auto">
                            <FaSearch className="ml-2 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search jobs"
                                className="flex-grow border-none focus:ring-0 p-2 outline-none"
                            />
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
                                Search
                            </button>
                        </div>
                        <div className="flex items-center space-x-3">
                            <select className="bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Sort by</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                            </select>
                            <FaThLarge className="text-lg cursor-pointer text-gray-700 hover:text-gray-900" />
                            <FaThList className="text-lg cursor-pointer text-gray-700 hover:text-gray-900" />
                        </div>
                    </div>

                    {/* Job Cards */}
                    {arr.map((job, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg bg-white shadow-lg p-5 space-y-4"
                        >
                            <header className="flex justify-between items-center">
                                <img
                                    src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/145-creative-logos-for-strong-first-impression/swirly-c-logo-design-unused-by-mihai-dolganiuc-dribbble.png"
                                    alt="Company Logo"
                                    className="w-16 h-16 rounded-full"
                                />
                                <div className="text-right">
                                    <p className="text-gray-500">Payment not disclosed</p>
                                    <p className="bg-orange-500 text-white rounded-full px-3 py-1 text-sm">
                                        Full Time / On-Site
                                    </p>
                                </div>
                            </header>
                            <main>
                                <h2 className="text-xl font-bold">{job}</h2>
                                <p className="text-gray-700 flex items-center mt-2">
                                    <FaLocationDot className="mr-2" /> Bhopal
                                </p>
                                <p className="text-gray-500">Immediate Joiner</p>
                            </main>
                            <footer className="flex justify-between items-center border-t pt-3 border-gray-300">
                                <Link
                                    to="/apply"
                                    className="w-[40%] text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    to="/viewjob"
                                    className="w-[40%] text-center bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition"
                                >
                                    View Job
                                </Link>
                                <button
                                    className="p-2 border border-gray-300 rounded-full hover:bg-red-100 transition"
                                    onClick={(e) => {
                                        e.target.style.color =
                                            e.target.style.color === "red" ? "" : "red";
                                    }}
                                >
                                    <FaHeart className="text-2xl" />
                                </button>
                            </footer>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default View;
