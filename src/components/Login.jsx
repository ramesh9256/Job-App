import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <header className="bg-black shadow text-white p-4">
                <p className="ml-10">
                   
                    <Link to="/" className="transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white px-3 py-1 rounded">Home</Link>

                    <span className="ml-2">/ Login</span>
                </p>
            </header>

            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-12 px-6 sm:px-8">

                <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">
                    {/* Logo Section */}
                    <div className="flex justify-center mb-6">
                        <img
                            src="https://jobx-app.vercel.app/logo1.png"
                            alt="Logo"
                            className="h-14 w-auto"
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        Welcome Back!
                    </h2>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-600 mb-2"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-600 mb-2"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right mb-6">
                        <a
                            href="#"
                            className="text-sm text-blue-600 hover:underline font-medium"
                        >
                            Forgot Password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow hover:bg-blue-700 transition">
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-3 text-gray-500 text-sm">or</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Social Login */}
                    <div className="flex justify-center space-x-4">
                        <button className="flex items-center px-4 py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition">
                            <FaGoogle className="mr-2" />
                            Sign in with Google
                        </button>
                        <button className="flex items-center px-4 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition">
                            <FaGithub className="mr-2" />
                            Sign in with GitHub
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="text-center text-sm text-gray-500 mt-8">
                        <p>
                            Don’t have an account?{" "}
                            <a
                                href="#"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Sign up now
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
