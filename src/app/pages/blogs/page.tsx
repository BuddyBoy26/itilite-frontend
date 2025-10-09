"use client";

import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const COLORS = {
  primary: "#ec5d25", // orange
  secondary: "#083059", // navy
};

type Blog = {
  slug: string;
  title: string;
  text: string;
  author: string;
  tags: string[];
  publishedAt: string;
  content?: { type: string; url?: string }[];
};

const Filters = [
  { name: "All", value: "all", id: 0 },
  { name: "Travel Management", value: "travel-management", id: 1 },
  { name: "Expense Management", value: "expense-management", id: 2 },
  { name: "Webinar", value: "webinar", id: 3 },
  { name: "Free Guides and Templates", value: "free-guides-and-templates", id: 4 },
];

const DropDownFilters = [
  { name: "Downloadables", value: "downloadables", id: 0 },
  { name: "Case Studies", value: "case-studies", id: 1 },
  { name: "Guides", value: "guides", id: 2 },
  { name: "Product Updates", value: "product-updates", id: 3 },
  { name: "In News", value: "in-news", id: 4 },
  { name: "Travel Tips", value: "travel-tips", id: 5 },
  { name: "Unified Travel and Expense", value: "unified-travel-and-expense", id: 6 },
];

const placeholderImage =
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&auto=format&fit=crop&q=60";

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [firstFilterActiveId, setFirstFilterActiveId] = useState<number>(0);
  const [dropDownFilterActive, setDropDownFilterActive] = useState(false);
  const [dropDownFilterSelectedId, setDropDownFilterSelectedId] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleFirstFilterClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setFirstFilterActiveId(Number(e.currentTarget.id));
  };

  const handleDropDownFilterClick = (): void => {
    setDropDownFilterActive(!dropDownFilterActive);
  };

  const handleFilterClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    setDropDownFilterSelectedId(Number(e.currentTarget.id));
    setDropDownFilterActive(false);
  };

  const filteredBlogs = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    const selectedTag =
      firstFilterActiveId === 0 ? null : Filters[firstFilterActiveId].name.toLowerCase();
    const selectedCategory =
      dropDownFilterSelectedId === 0 ? null : DropDownFilters[dropDownFilterSelectedId].name.toLowerCase();

    return blogs.filter((b) => {
      const matchesSearch =
        b.title.toLowerCase().includes(lowerSearch) ||
        b.text.toLowerCase().includes(lowerSearch) ||
        b.author.toLowerCase().includes(lowerSearch);

      const matchesTag =
        !selectedTag || b.tags.some((t) => t.toLowerCase().includes(selectedTag));

      const matchesCategory =
        !selectedCategory || b.tags.some((t) => t.toLowerCase().includes(selectedCategory));

      return matchesSearch && matchesTag && matchesCategory;
    });
  }, [blogs, search, firstFilterActiveId, dropDownFilterSelectedId]);

  return (
    <div className="blogs-container bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#001f5c]">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="text-xs sm:text-sm text-white">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1 text-white">»</span>
            <Link href="/blog" className="text-orange-400 hover:underline">
              Blog
            </Link>
          </div>
          <div className="mt-3 sm:mt-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-white leading-snug">
              Blog and Resource Center
            </h1>
          </div>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="searching-area max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row justify-center gap-6">
        <div className="search-box-and-first-filters w-full md:w-[77%]">
          <div className="search-box flex items-center border border-orange-400 rounded-full overflow-hidden bg-white">
            <input
              type="text"
              placeholder="Search blogs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-grow px-4 py-2 text-sm text-gray-700 focus:outline-none rounded-l-full"
            />
            <button
              type="button"
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

        <div className="second-filters w-full md:w-[20%] relative">
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
              className="dropdown-box absolute top-12 left-3 text-sm rounded-lg bg-white border border-gray-200 shadow-lg z-10 pl-1 pr-8 py-2 text-gray-700 cursor-pointer"
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

      {/* Blog List */}
      <div className="max-w-7xl mx-auto px-6 pb-12 space-y-6">
        {loading ? (
          <div className="flex justify-center py-20 text-gray-500 text-sm animate-pulse">
            Loading blogs...
          </div>
        ) : filteredBlogs.length === 0 ? (
          <p className="text-center text-gray-600 text-sm">
            No blogs found. Try adjusting your search or filters.
          </p>
        ) : (
          filteredBlogs.map((blog, i) => {
            const image =
              blog.content?.find((c) => c.type === "image" && c.url)?.url ||
              placeholderImage;

            return (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                <div className="md:w-1/3 w-full">
                  <img
                    src={image}
                    alt={blog.title}
                    className="w-full h-56 md:h-48 object-cover"
                  />
                </div>

                <div className="md:w-2/3 w-full p-6 space-y-3">
                  <h2
                    className="text-xl font-semibold"
                    style={{ color: COLORS.secondary }}
                  >
                    {blog.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {blog.text.slice(0, 180)}...
                  </p>
                  <div className="text-xs text-gray-500">
                    By{" "}
                    <span className="font-medium text-gray-700">
                      {blog.author}
                    </span>{" "}
                    • {new Date(blog.publishedAt).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/blogs/${blog.slug}`}
                    className="inline-block text-sm font-medium mt-2"
                    style={{ color: COLORS.primary }}
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
