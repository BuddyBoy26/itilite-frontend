"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const COLORS = {
  primary: "#ec5d25",
  secondary: "#083059",
};

type ContentBlock = {
  type: "header" | "subheader" | "paragraph" | "image";
  value?: string;
  url?: string;
};

type Blog = {
  slug: string;
  title: string;
  text: string;
  author: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  content?: ContentBlock[];
};

const placeholderImage =
  "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=1200&auto=format&fit=crop&q=60";

export default function BlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const data = await res.json();
        setBlog(data);
      } catch (error: any) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading)
    return (
      <div className="flex justify-center py-20 text-gray-500 animate-pulse">
        Loading blog...
      </div>
    );

  if (err)
    return (
      <div className="text-center text-red-600 mt-10">
        Failed to load blog: {err}
      </div>
    );

  if (!blog)
    return (
      <div className="text-center text-gray-600 mt-10">
        Blog not found.
      </div>
    );

  const coverImage =
    blog.content?.find((c) => c.type === "image" && c.url)?.url || placeholderImage;

  const description =
    blog.content?.find((c) => c.type === "paragraph")?.value?.slice(0, 150) ||
    blog.text?.slice(0, 150) ||
    "Read our latest article.";

  return (
    <>
      {/* ✅ Dynamic SEO Head */}
      <Head>
        <title>{`${blog.title} | Blog`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/blogs/${blog.slug}`} />
        <meta property="og:image" content={coverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={coverImage} />
      </Head>

      <div className="min-h-screen bg-white">
        {/* --- Banner --- */}
        <div
          className="w-full bg-cover bg-center text-white py-20 px-6"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${coverImage})`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-3">
            <h1 className="text-4xl font-bold leading-tight">{blog.title}</h1>
            <p className="text-sm text-gray-200">
              By <span className="font-medium">{blog.author}</span> •{" "}
              {new Date(blog.publishedAt).toLocaleDateString()} •{" "}
              {blog.readingTime || 1} min read
            </p>
            <div className="flex justify-center gap-2 flex-wrap mt-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-orange-500 text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- Blog Content --- */}
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
          {blog.content && blog.content.length > 0 ? (
            blog.content.map((block, idx) => {
              switch (block.type) {
                case "header":
                  return (
                    <h1
                      key={idx}
                      className="text-3xl font-bold mt-8 mb-4"
                      style={{ color: COLORS.secondary }}
                    >
                      {block.value}
                    </h1>
                  );
                case "subheader":
                  return (
                    <h2
                      key={idx}
                      className="text-2xl font-semibold mt-6 mb-3"
                      style={{ color: COLORS.primary }}
                    >
                      {block.value}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p
                      key={idx}
                      className="text-gray-800 leading-relaxed whitespace-pre-wrap"
                    >
                      {block.value}
                    </p>
                  );
                case "image":
                  return (
                    <div key={idx} className="my-6">
                      <Image
                        src={block.url || placeholderImage}
                        alt="Blog content image"
                        width={800}
                        height={400}
                        className="rounded-lg shadow-md w-full object-cover"
                      />
                    </div>
                  );
                default:
                  return null;
              }
            })
          ) : (
            <p className="text-gray-600">No content available for this blog.</p>
          )}

          {/* --- Back Button --- */}
          <div className="mt-10 text-center">
            <Link
              href="/pages/blogs"
              className="px-5 py-2 rounded text-white font-medium shadow"
              style={{ backgroundColor: COLORS.secondary }}
            >
              ← Back to Blog List
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
