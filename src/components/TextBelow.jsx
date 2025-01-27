import React from 'react';
import { Link } from 'react-router-dom';

const TextBelow = () => {
  return (
    <div className="py-16 bg-gray-50">
      {/* Post Jobs Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Post Jobs</h2>
          <p className="text-gray-600 mt-4">Quickly find the right talent for your organization.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Quick and Easy Way to Advertise</h3>
            <p className="text-gray-600">
              If you're looking to fill open positions with qualified and competent workers, Jobxpro is your best bet.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Hire for Your Company</h3>
            <p className="text-gray-600">
              Simply post your work specifications and due dates on our platform. You will be updated on the status of
              application submissions as they come in.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Reach Out to Qualified Matches</h3>
            <p className="text-gray-600">
              Get in touch with good fits by sorting out candidates using different criteria. There is no extra work or
              inconvenience involved.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12 space-x-6">
          <Link
            to = "/apply"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            POST A JOB
          </Link>
          <Link
            to = "/learnmore"
            className="bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-300 transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>

      {/* Talented Candidates Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Talented Candidates</h2>
          <p className="text-gray-600 mt-4">
            Discover opportunities and get noticed by top companies around the globe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Get Discovered by Companies Looking to Hire Remote
            </h3>
            <p className="text-gray-600">
              Find the best job for you by narrowing your search based on your priorities.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Get Your Profile Listed</h3>
            <p className="text-gray-600">
              Get the attention of potential employers. Find internships and full-time positions by searching with
              keywords. Following your application, the recruiters will reach out to you directly.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Customize Your Profile</h3>
            <p className="text-gray-600">
              JobXpro’s impressive customizability lets you zero in on organizations and fields that are a good fit for
              your expertise and interests.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12 space-x-6">
          <Link
            to = "/apply"
            className="bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            GET LISTED
          </Link>
          <Link
            to = "/learntalent"
            className="bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-gray-300 transition"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextBelow;
