import React from "react";
import { Link } from "react-router-dom";

const TalentLearn = () => {
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
                        Talented Candidates
                    </h1>
                </div>

                {/* Image Section */}
                <div className="mt-8 md:mt-10 flex justify-center">
                    <img
                        src="https://jobx-app.vercel.app/static/media/talented.6fa7cc6f57b0867509a3.jpg"
                        alt="Learn More"
                        className="rounded-xl shadow-lg w-full max-w-lg md:max-w-3xl"
                    />
                </div>

                {/* Text Content */}
                <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
                    {/* Quick and Easy */}
                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                            Get discovered by companies looking to hire remote
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Find the best job for you by narrowing your search based on your priorities.
                        </p>
                    </div>

                    {/* Hire for Your Company */}
                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                            Get your profile listed:
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">
                            Get the attention of potential employers. Find internships and full-time positions by searching with keywords. Following your application, the recruiters will reach out to you directly.
                        </p>
                    </div>

                    {/* Reach Out to Qualified Matches */}
                    <div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                        Customize your profile:
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base">
                        JobXpro’s impressive customizability lets you zero in on organizations and fields that are a good fit for your expertise and interests. Learn how to use your unique set of experiences, education, and talents to pinpoint the greatest possible career path for you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TalentLearn;
