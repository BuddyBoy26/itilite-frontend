"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

const COLORS = {
  primary: "#ec5d25", // orange
  secondary: "#083059", // navy
};

type Blog = {
  slug: string;
  title: string;
  author: string;
  tags: string[];
  text: string;
  readingTime: number;
  publishedAt: string;
  content?: { type: string; value?: string; url?: string }[];
};

const placeholderImage =
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&auto=format&fit=crop&q=60";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`);
        if (!res.ok) throw new Error("Failed to load blog.");
        const data: Blog = await res.json();
        setBlog(data);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch blog details.");
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading blog...
      </div>
    );

  if (error || !blog)
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        {error || "Blog not found."}
      </div>
    );

  const headerImage =
    blog.content?.find((c) => c.type === "image" && c.url)?.url || placeholderImage;

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Banner Section */}
      <div
        className="w-full bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(8,48,89,0.7), rgba(8,48,89,0.7)), url(${headerImage})`,
        }}
      >
        <div className="max-w-5xl mx-auto text-white px-6 py-16 md:py-24 space-y-6">
          {/* Breadcrumbs */}
          <div className="text-xs sm:text-sm text-gray-200">
            <Link href="/" className="hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1">»</span>
            <Link href="/blog" className="hover:underline text-orange-400">
              Blog
            </Link>{" "}
            <span className="mx-1">»</span>
            <span className="text-gray-300">{blog.title}</span>
          </div>

          {/* Title + Info */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {blog.title}
          </h1>

          <p className="text-gray-200 text-sm md:text-base">
            By{" "}
            <span className="font-semibold text-white">{blog.author}</span> •{" "}
            {new Date(blog.publishedAt).toLocaleDateString()} •{" "}
            {blog.readingTime} min read
          </p>

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-orange-400 text-white px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8 bg-white -mt-8 rounded-t-3xl shadow-lg z-10 relative">
        {blog.content && blog.content.length > 0 ? (
          blog.content.map((block, index) => {
            if (block.type === "image" && block.url) {
              return (
                <div key={index} className="my-6">
                  <img
                    src={block.url}
                    alt="Blog Visual"
                    className="w-full rounded-xl object-cover shadow-md"
                  />
                </div>
              );
            } else if (block.type === "header") {
              return (
                <h2
                  key={index}
                  className="text-2xl font-semibold mt-6"
                  style={{ color: COLORS.secondary }}
                >
                  {block.value}
                </h2>
              );
            } else if (block.type === "subheader") {
              return (
                <h3
                  key={index}
                  className="text-xl font-semibold mt-4"
                  style={{ color: COLORS.primary }}
                >
                  {block.value}
                </h3>
              );
            } else {
              return (
                <p key={index} className="text-gray-700 leading-relaxed text-base">
                  {block.value}
                </p>
              );
            }
          })
        ) : (
          <p className="text-gray-700 leading-relaxed">{blog.text}</p>
        )}

        {/* Back to Blog Button */}
        <div className="pt-10 text-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 rounded-lg text-white font-medium transition"
            style={{ backgroundColor: COLORS.secondary }}
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
