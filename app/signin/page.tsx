














"use client";


import React, { useState } from "react";
import Image from "next/image";
interface FormData {
  name: string;
  email: string;
  password: string;
  rememberMe: boolean;
}

export default function Signin() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="main-container max-w-sm mx-auto p-6 shadow-lg rounded-md bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign In</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-400 focus:outline-none"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 text-orange-400 border-gray-300 rounded focus:ring-2 focus:ring-orange-400"
          />
          <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
            Remember me?
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-orange-400 text-white font-medium text-lg rounded hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Sign Up
        </button>

        {/* Forget Password Link */}
        <p className="text-right text-sm text-gray-500 mt-2">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
        </p>

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Signup Buttons */}
        <button
          type="button"
          className="w-full flex items-center justify-center p-2 border border-gray-300 rounded mb-4 hover:bg-gray-100"
        >
          <Image
            src="/images/google-icon.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        <button
          type="button"
          className="w-full flex items-center justify-center p-2 border border-gray-300 rounded hover:bg-gray-100"
        >
          <Image
            src="/images/apple-icon.png"
            alt="Apple Icon"
            className="w-5 h-5 mr-2"
          />
          Sign up with Apple
        </button>
      </form>
    </div>
  );
}
