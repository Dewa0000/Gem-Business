import React from "react";

const BlogPage = () => {
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
              {/* Blog Post 1 */}
              <div className="bg-[#1b3124] rounded-lg p-4 sm:p-6 border border-[#366347] hover:shadow-lg transition-shadow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCooC60l_c_P9KIQ7HQ8qa17YkP-l1NSRNsZl3OayoLM7JqCuEpu8ET8QyJ9ODy3bI-uRb338jXYzViyJ2Sibo-WSjsHufSnwgRq5M6KkxiwPo2yeIEU0hQ66qkcRfVLea1XG6AvKPVVrq06gSTWEWvhX2aNC4c4H_I-z-qk1ZDcsrgGWeSytdbgkJvM_yU_ki-uayLYimID1gqnrga3zoDFgOkNtowADBUjf8J78QsYtCnCWcifiHwddueDl4I3ASdk6p3u5noE"
                  alt="Choosing Your Birthstone"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-[#96c5a8] text-lg sm:text-xl font-bold mb-2">
                  Choosing Your Birthstone: A Guide
                </h2>
                <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed mb-4">
                  Learn how to pick the perfect birthstone based on your zodiac sign and its unique properties.
                </p>
                <a
                  href="/blog/choosing-your-birthstone"
                  className="text-[#96c5a8] text-sm font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-[#1b3124] rounded-lg p-4 sm:p-6 border border-[#366347] hover:shadow-lg transition-shadow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf8kdZYPVMrKOtBbEs5iOsCdQZtEBjI_gEzWVqbcvfWBJhzKRFWiRAIxsU8GUVa2CzshEd4ZgRsB5DS5z2e7ZHkHKAXaop3cZ-DOYhK7MjMGpKf-dVX2elhNvzllr5Fk6n5JidrgWRnF9N0rzYV93NURqDIzMcorF657ZzLlbFVrhpnFiIL97kRDPXtdNkWSoJtBuXmumTIDyOOV4TcpDs0yNhlk4yLtSRxU8PMC8dnXoXXL-ATkV_RXO7VbiLKuyHIIPnBhfyN3E"
                  alt="Gemstone Care Tips"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-[#96c5a8] text-lg sm:text-xl font-bold mb-2">
                  How to Care for Your Gemstone Jewelry
                </h2>
                <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed mb-4">
                  Expert tips to keep your CIG-certified gemstones sparkling for years.
                </p>
                <a
                  href="/blog/gemstone-care-tips"
                  className="text-[#96c5a8] text-sm font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-[#1b3124] rounded-lg p-4 sm:p-6 border border-[#366347] hover:shadow-lg transition-shadow">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVyX6DzQKzl5-ehKocBoQsJvOqRd0UWLR00J6s1JfH0RR-iak0IKhLPzbJG5vA2l9qcc2uBI34h8CUvFY9IDzjutHzJF4iE-97wDLEHtiZpMZ7NUBCcxGutFJrDCLX-RNzrE9CxepwDNPYLgcqwDEmw99N4UcEL2kAg1ctcYEyUQXP9_W7FDr4jdvQr2RTVvOybRjPadU6c6Ne6EoJQ6RcnF9uv1GSyUC4TNLYCPwYMTuuyl8eus8n4OdAYswTEgnN1L6zXzaXIR8"
                  alt="2025 Jewelry Trends"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-[#96c5a8] text-lg sm:text-xl font-bold mb-2">
                  Top Jewelry Trends for 2025
                </h2>
                <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed mb-4">
                  Explore the latest styles featuring natural gemstones and gold designs.
                </p>
                <a
                  href="/blog/2025-jewelry-trends"
                  className="text-[#96c5a8] text-sm font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
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

export default BlogPage;