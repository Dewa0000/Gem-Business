import React, { useState, useEffect } from "react";

const BlogsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://gem-business.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data.blogs))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#122118] to-[#1b3124] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-full sm:max-w-[960px] w-full flex-1">
            {/* Header Section */}
            <div className="text-center mb-10">
              <h1 className="text-[#96c5a8] text-3xl sm:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                Gems by Shruti Blog
              </h1>
              <p className="text-[#c5dceb] text-sm sm:text-base mt-2 leading-relaxed max-w-[600px] mx-auto">
                Discover insights on gemstones, jewelry trends, and care tips to inspire your next purchase.
              </p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-[#1b3124] rounded-lg p-4 sm:p-6 border border-[#366347] hover:shadow-lg transition-shadow"
                >
                  <img
                    src={post.imageURL}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-[#96c5a8] text-lg sm:text-xl font-bold mb-2">
                    {post.title}
                  </h2>
                  <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed mb-4">
                    {post.snippet}
                  </p>
                  <a
                    href={`/blog/${post._id}`} // Use _id or slug if available
                    className="text-[#96c5a8] text-sm font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center py-10">
              <p className="text-[#c5dceb] text-sm sm:text-base mb-4">
                Stay updated with our latest insights—subscribe for exclusive content!
              </p>
              <button
                className="flex mx-auto items-center justify-center rounded-lg h-10 sm:h-12 px-5 bg-[#96c5a8] text-white text-sm sm:text-base font-bold hover:bg-[#a0d1b9] transition-colors"
                onClick={() => window.location.href = "/subscribe"}
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;