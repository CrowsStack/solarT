'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Benefits of Solar Energy for Your Home",
      category: "solar",
      excerpt: "Discover how solar energy can reduce your electricity bills and help the environment...",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/blog/solar-benefits.jpg"
    },
    {
      id: 2,
      title: "Modern Security Systems: A Complete Guide",
      category: "security",
      excerpt: "Learn about the latest advancements in home and business security systems...",
      date: "2024-01-12",
      readTime: "8 min read",
      image: "/blog/security-guide.jpg"
    },
    {
      id: 3,
      title: "Fire Detection Systems: Saving Lives and Property",
      category: "fire",
      excerpt: "Understanding the importance of early fire detection and prevention...",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "/blog/fire-detection.jpg"
    },
    {
      id: 4,
      title: "Smart Intercom Systems for Modern Homes",
      category: "intercom",
      excerpt: "Explore the features of modern intercom systems and their benefits...",
      date: "2024-01-08",
      readTime: "4 min read",
      image: "/blog/intercom-systems.jpg"
    },
    {
      id: 5,
      title: "Maximizing Solar Panel Efficiency",
      category: "solar",
      excerpt: "Tips and tricks to get the most out of your solar panel installation...",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "/blog/solar-efficiency.jpg"
    },
    {
      id: 6,
      title: "Electric Fencing: Safety and Security",
      category: "security",
      excerpt: "Everything you need to know about electric fence installation and maintenance...",
      date: "2024-01-03",
      readTime: "5 min read",
      image: "/blog/electric-fence.jpg"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'solar', label: 'Solar Energy' },
    { id: 'security', label: 'Security' },
    { id: 'fire', label: 'Fire Detection' },
    { id: 'intercom', label: 'Intercom' }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      (activeCategory === 'all' || post.category === activeCategory) &&
      (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Blog</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest news and insights in solar energy and security systems
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/80 text-gray-800 hover:bg-blue-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-48 bg-gray-200 relative">
                  {/* Replace with actual images */}
                  <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-900/30 backdrop-blur-sm py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get the latest updates and insights delivered to your inbox
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
