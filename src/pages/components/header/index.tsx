import Link  from "next/link";
import React, { useState } from "react";
import styles from "./header.module.css";

<image></image>
export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <header className={styles.header}>
        <div className="flex items-center space-x-4">
            <Link href= "/" className="font-bold text-2xl">
            Chamador Top</Link>

        
            <nav className="hidden md:flex space-x-4 pl-20">
            <a href="/about" className="hover:text-yellow-900 dark:hover:text-white">
                About
            </a>
            <a href="/services" className="hover:text-yellow-900 dark:hover:text-white">
                Services
            </a>
            <a href="/contact" className="hover:text-yellow-900 dark:hover:text-white">
                Contact
            </a>
            </nav>
        </div>

        {/* Mobile menu button */}

        <div className="md:hidden flex items-center ml-auto">
            <button className="text-white-500 hover:text-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
            onClick={() => {
                setIsDropdownOpen(!isDropdownOpen);
                
            }
            }>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            </button>
        </div>
        {/* Dropdown menu */}
        {isDropdownOpen && (
          <div className="md:hidden absolute top-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact
            </Link>
          </div>
        )}
        <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
            Sign In
            </button>
        </div>
        </header>
    );
    }