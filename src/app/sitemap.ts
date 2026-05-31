import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = "https://www.cyglobalmerchants.com";

  // Static site paths
  const staticPaths = [
    "",
    "/about",
    "/products",
    "/markets",
    "/real-estate",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${domain}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic blog post paths
  const dynamicBlogPaths = blogPosts.map((post) => ({
    url: `${domain}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...dynamicBlogPaths];
}
