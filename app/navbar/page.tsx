"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = [
    { label: "Checkout", href: "/checkout" },
    { label: "Signin", href: "/signin" },
    { label: "SignUp", href: "/signup" },
    { label: "Our Chef", href: "/ourchef" },
    { label: "Shop Details", href: "/shopdetails" },
    { label: "Shopping Cart", href: "/shoppingcart" },
  ];

  return (
    <div className="relative z-20 bg-gray-900 text-white">
      {!isHomePage && (
        <Image
          src="/images/unsplash_4ycv3Ky1ZZU.png"
          alt="menu image"
          layout="responsive"
          width={1920}
          height={410}
          className="w-full h-auto z-10"
        />
      )}

      <div className="absolute inset-0 flex flex-col items-center space-y-6 z-20">
        <div className="flex items-center space-x-1 pt-5 z-20">
          <Link
            href="/"
            className="text-4xl font-bold text-[#FF9F0D] hover:text-white"
          >
            <span className="text-[#FF9F0D]">Food</span>
            <span className="text-white">Truck</span>
          </Link>
        </div>

        <div className="flex items-center justify-between w-full px-64 z-20">
          <nav className="flex space-x-6 z-20">
            <Link href="/" className="text-white hover:text-[#FF9F0D] z-20">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-[#FF9F0D] z-20">
              Menu
            </Link>
            <Link href="/blog" className="text-white hover:text-[#FF9F0D] z-20">
              Blog
            </Link>
            <Link
              href="/pages"
              className="text-white hover:text-[#FF9F0D] z-20"
            >
              Pages
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#FF9F0D] z-20"
            >
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-[#FF9F0D] z-20">
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#FF9F0D] z-20"
            >
              Contact
            </Link>

            {/* Dropdown Menu */}
            <div className="relative z-20">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-[#FF9F0D] flex items-center z-20"
              >
                <RxDropdownMenu className="mr-2 w-5 h-5" />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 transform transition duration-300 ease-in-out scale-100 opacity-100">
                  {dropdownItems.map((item, index) => (
                    <li key={index} className=" hover:bg-[#FF9F0D]">
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-800"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          <div className="flex items-center space-x-36 z-20">
            <div className="relative z-20">
              <input
                type="text"
                placeholder="Search."
                className="text-[#FFFFFF] pl-10 py-2 px-4 border border-[#FF9F0D] bg-black rounded-full w-64"
              />
              <Image
                src="/images/Group.png"
                alt="Search Icon"
                width={24}
                height={24}
                className="absolute top-2 right-4 w-6 h-6 z-20"
              />
            </div>

            <div className="relative right-32 z-20">
              <Image
                src="/images/Handbag.png"
                alt="Cart Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
