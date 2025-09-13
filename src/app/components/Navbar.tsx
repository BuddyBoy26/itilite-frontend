"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="C:\Users\HP\Downloads\Logo-2.svg" className="text-2xl font-bold text-orange-600">
          <Image
          src="/Logo-2.svg"   
          alt="Company Logo"
          width={120}
          height={40}
          priority
        />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/overview">Overview</Link>
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-700 font-semibold hover:text-orange-600"
          >
            Login
          </Link>
          <Link
            href="/demo"
            className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
          >
            Demo
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-gray-700 font-medium shadow">
          <Link href="/">Home</Link>
          <Link href="/overview">Overview</Link>
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources">Resources</Link>
          <Link href="/login" className="block">
            Login
          </Link>
          <Link
            href="/demo"
            className="block bg-orange-600 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-700 transition"
          >
            Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
