"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Filters = [
  {
    name: "All",
    value: "all",
    id: 0,
  },
  {
    name: "Travel Management",
    value: "travel-management",
    id: 1,
  },
  {
    name: "Expense Management",
    value: "expense-management",
    id: 2,
  },
  {
    name: "Webinar",
    value: "webinar",
    id: 3,
  },
  {
    name: "Free Guides and Templates",
    value: "free-guides-and-templates",
    id: 4,
  },
];

const DropDownFilters = [
  {
    name: "Downloadables",
    value: "downloadables",
    id: 0,
  },
  {
    name: "Case Studies",
    value: "case-studies",
    id: 1,
  },
  {
    name: "Guides",
    value: "guides",
    id: 2,
  },
  {
    name: "Product Updates",
    value: "product-updates",
    id: 3,
  },
  {
    name: "In News",
    value: "In-news",
    id: 4,
  },
  {
    name: "Travel Tips",
    value: "travel-tips",
    id: 5,
  },
  {
    name: "Unified Travel and Expense",
    value: "unified-travel-and-expense",
    id: 6,
  },
];

const Blogs = () => {
  const [firstFilterActiveId, setfirstFilterActiveId] = useState<number>(0);
  const [dropDownFilterActive, setDropDownFilterActive] =
    useState<boolean>(false);
  const [dropDownFilterSelectedId, setDropDownFilterSelectedId] =
    useState<number>(0);

  const handleFirstFilterClick = (e: any) => {
    setfirstFilterActiveId(Number(e.target.id));
  };

  const handleDropDownFilterClick = () => {
    setDropDownFilterActive(!dropDownFilterActive);
  };

  const handleFilterClick = (e: any) => {
    setDropDownFilterSelectedId(Number(e.target.id));
    setDropDownFilterActive(false);
  };

  return (
    <div className="blogs-container bg-gray-100">
      <div className="bg-[#001f5c]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {/* Breadcrumbs */}
          <div className="text-xs sm:text-sm text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1 text-white">»</span>
            <Link href="/blog" className="text-orange-400 hover:underline">
              Blog
            </Link>
          </div>

          {/* Heading */}
          <div className="mt-3 sm:mt-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-white leading-snug">
              Blog and Resource Center
            </h1>
          </div>
        </div>
      </div>

      <div className="searching-area max-w-7xl mx-auto px-6 py-8 md:py-12 flex justify-center">
        <div className="search-box-and-first-filters w-[77%] mr-[3%]">
          <div className="search-box flex items-center border border-orange-400 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              name="blog-name"
              id="blog-name"
              placeholder="Search blogs..."
              className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none rounded-l-full"
            />
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-3 flex items-center justify-center transition-colors rounded-r-full"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          <div className="search-filters flex flex-wrap gap-3 mt-4">
            {Filters.map((filter) => (
              <button
                onClick={handleFirstFilterClick}
                id={`${filter.id}`}
                key={filter.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  firstFilterActiveId === filter.id
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="second-filters w-[20%] relative">
          <div
            className="flex items-center justify-between rounded-full border border-orange-400 bg-white px-4 py-3 cursor-pointer hover:border-orange-500 transition"
            onClick={handleDropDownFilterClick}
          >
            <span className="text-gray-700 font-medium text-sm px-2">
              {DropDownFilters[dropDownFilterSelectedId].name}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-orange-400 ml-2 ${
                dropDownFilterActive ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>

          {dropDownFilterActive && (
            <motion.div
              className="dropdown-box absolute top-12 left-3 text-sm rounded-lg bg-gray-200 pl-1 pr-8 py-2 text-gray-700 cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {DropDownFilters.map((filter) => (
                <div
                  key={filter.id}
                  className="py-2 px-2 hover:text-orange-400"
                  id={`${filter.id}`}
                  onClick={handleFilterClick}
                >
                  {filter.name}
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
