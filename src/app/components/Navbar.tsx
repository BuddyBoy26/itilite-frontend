"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "../../../public/Logo-2.webp";

type DropdownItem = {
  label: string;
  href: string;
  header?: boolean;
};

const menus = {
  Overview: [
    { label: "About Us", href: "/about-us" },
    { label: "Customers", href: "/customers" },
    { label: "Why Travellers Love Us", href: "/why-travellers-love-us" },
  ],
  Products: [
    { label: "Business Travel", href: "/products/business-travel" },
    { label: "Expense Management", href: "/products/expense-management" },
    { label: "Corporate Card", href: "/products/corporate-card" },
  ],
  Solutions: [
    [
      { label: "By Role", href: "#", header: true },
      { label: "For CFOs", href: "/solutions/role/cfos" },
      { label: "For Travel Managers", href: "/solutions/role/travel-managers" },
    ],
    [
      { label: "By Solution", href: "#", header: true },
      { label: "Centralize Payments", href: "/solutions/centralize-payments" },
      {
        label: "Credit Card Authorization",
        href: "/solutions/credit-card-authorization",
      },
    ],
    [
      { label: "By Service", href: "#", header: true },
      { label: "Visa Assistance", href: "/solutions/visa-assistance" },
    ],
  ],
  Resources: [
    { label: "Blog", href: "/resources/blog" },
    { label: "Free Guides & Templates", href: "/resources/guides-templates" },
    { label: "Case Studies", href: "/resources/case-studies" },
  ],
};

export default function Navbar() {
  const [dropdown, setDropdown] = useState<string>("");

  // Dropdown renderer
  function renderDropdown(title: keyof typeof menus) {
    if (title === "Solutions") {
      return (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg flex p-6 space-x-8 z-50 min-w-[600px]">
          {(menus.Solutions as DropdownItem[][]).map((column, idx) => (
            <div key={idx} className="flex flex-col space-y-2 min-w-[180px]">
              {column.map((item, i) =>
                item.header ? (
                  <span
                    key={i}
                    className="font-bold text-gray-400 uppercase tracking-wide"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    key={i}
                    href={item.href}
                    className="hover:text-orange-600"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-3 px-6 min-w-[230px] flex flex-col space-y-3 z-50">
        {(menus[title] as DropdownItem[]).map((item, idx) => (
          <Link key={idx} href={item.href} className="hover:text-orange-600">
            {item.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Company Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium relative">
          {["Overview", "Products", "Solutions", "Pricing", "Resources"].map(
            (title) => (
              <div
                key={title}
                className="relative flex items-center"
                onMouseEnter={() => setDropdown(title)}
                onMouseLeave={() => setDropdown("")}
              >
                {title === "Pricing" ? (
                  <Link
                    href="/pricing"
                    className={`px-2 py-1 ${
                      dropdown === title ? "text-orange-600" : "text-gray-700"
                    }`}
                  >
                    {title}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-2 py-1 ${
                        dropdown === title ? "text-orange-600" : "text-gray-700"
                      }`}
                    >
                      {title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          dropdown === title ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {/* Dropdown */}
                    {dropdown === title &&
                      renderDropdown(title as keyof typeof menus)}
                  </>
                )}
              </div>
            )
          )}
        </div>

        {/* Right Buttons */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setDropdown(dropdown === "mobile" ? "" : "mobile")}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Open mobile menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {dropdown === "mobile" && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 text-gray-700 font-medium shadow">
          <Link href="/">Home</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/customers">Customers</Link>
          <Link href="/why-travellers-love-us">Why Travellers Love Us</Link>
          <Link href="/products/business-travel">Business Travel</Link>
          <Link href="/products/expense-management">Expense Management</Link>
          <Link href="/products/corporate-card">Corporate Card</Link>
          <Link href="/solutions/role/cfos">For CFOs</Link>
          <Link href="/solutions/role/travel-managers">
            For Travel Managers
          </Link>
          <Link href="/solutions/centralize-payments">Centralize Payments</Link>
          <Link href="/solutions/credit-card-authorization">
            Credit Card Authorization
          </Link>
          <Link href="/solutions/visa-assistance">Visa Assistance</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/resources/blog">Blog</Link>
          <Link href="/resources/guides-templates">
            Free Guides & Templates
          </Link>
          <Link href="/resources/case-studies">Case Studies</Link>
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
