import React from "react";

const HomePage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] w-full flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[400px] sm:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 sm:p-6"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://images.unsplash.com/photo-1600180758890-6dc538ecf5f3?auto=format&fit=crop&w=1470&q=80")',
                  }}
                >
                  <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                      GJS — Gems & Jewellery by Shruti
                    </h1>
                    <h2 className="text-white text-sm sm:text-base font-normal leading-relaxed max-w-[600px] mx-auto">
                      Certified by Experts, Loved by You. Discover timeless creations
                      crafted with 100% Natural Gemstones, CIG Certification, and unmatched elegance.
                    </h2>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button className="flex min-w-[120px] items-center justify-center rounded-lg h-10 sm:h-12 px-5 bg-[#39e079] text-[#122118] text-sm sm:text-base font-bold tracking-wide hover:bg-[#2fbb64] transition-all">
                      Explore Collection
                    </button>
                    <button className="flex min-w-[120px] items-center justify-center rounded-lg h-10 sm:h-12 px-5 border border-[#39e079] text-[#39e079] text-sm sm:text-base font-semibold tracking-wide hover:bg-[#39e079]/10 transition-all">
                      Book Custom Design
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="flex flex-col text-center gap-3 py-10">
              <h2 className="text-white text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.015em]">
                Where Purity Meets Perfection
              </h2>
              <p className="text-[#cfe9d9] text-sm sm:text-base font-normal leading-relaxed max-w-[700px] mx-auto">
                At GJS, every piece is a story — handcrafted with precision, authenticity, and a promise of trust.
                From ethically sourced diamonds to certified gemstones, we bring you jewellery that’s elegant,
                meaningful, and forever.
              </p>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0 py-6">
              {[
                "Every grade of Diamond available",
                "100% Natural & Authorized Gemstones",
                "CIG Certified | Gemologist Approved",
                "18K, 20K, 22K & 23K Gold Jewellery at Minimum Making Charges",
                "Silver Jewellery designed & personalized to your taste",
                "Hallmark Jewellery only — because purity isn’t optional",
                "Bespoke Custom Designs made just for you",
              ].map((text, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-[#2b4b38] bg-[#1b3124] p-4 sm:p-6 text-[#e8f3ec] text-sm sm:text-base"
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Featured Collections */}
            <h2 className="text-white text-[18px] sm:text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-8">
              Signature Collections
            </h2>
            <div className="flex overflow-x-auto gap-3 p-4 [&::-webkit-scrollbar]:hidden">
              {[
                {
                  title: "Radiant Rings",
                  desc: "Handcrafted rings that redefine timeless beauty.",
                  img: "https://images.unsplash.com/photo-1600181950916-dc46e6b8a7c3?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Elegant Necklaces",
                  desc: "Necklaces that capture sophistication and grace.",
                  img: "https://images.unsplash.com/photo-1600180758890-6dc538ecf5f3?auto=format&fit=crop&w=600&q=80",
                },
                {
                  title: "Dazzling Earrings",
                  desc: "Earrings that reflect your inner brilliance.",
                  img: "https://images.unsplash.com/photo-1600180758895-7b1a6bb23f41?auto=format&fit=crop&w=600&q=80",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-3 rounded-lg min-w-[180px] sm:min-w-[240px] bg-[#1b3124] p-3 sm:p-4"
                >
                  <div
                    className="aspect-square bg-center bg-cover rounded-lg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-semibold">{item.title}</p>
                    <p className="text-[#96c5a8] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Our Story Section */}
            <div className="flex flex-col gap-6 sm:gap-10 px-4 py-10 text-center">
              <h1 className="text-white text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em]">
                Our Craftsmanship Promise
              </h1>
              <p className="text-[#cfe9d9] text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto">
                Each GJS creation is born from a legacy of craftsmanship and care.
                Every diamond is handpicked, every gemstone is ethically sourced,
                and every design is perfected to make you feel as special as the piece itself.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                {[
                  {
                    title: "Exceptional Quality",
                    desc: "We use only the finest materials, hallmarked and certified for purity.",
                  },
                  {
                    title: "Ethical Sourcing",
                    desc: "Every gem is responsibly sourced, respecting both craft and nature.",
                  },
                  {
                    title: "Timeless Design",
                    desc: "Blending tradition with modern artistry — made to last generations.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-[#366347] bg-[#1b3124] p-5 text-left"
                  >
                    <h2 className="text-white text-base font-bold">{item.title}</h2>
                    <p className="text-[#96c5a8] text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visit Us Section */}
            <div className="text-center py-10">
              <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
                Visit Us in Raipur (C.G)
              </h2>
              <p className="text-[#cfe9d9] text-sm sm:text-base mt-3 mb-5">
                DM us on Instagram for gemstone consultations or to craft your custom design.  
                Let’s create something that’s truly yours.
              </p>
              <button className="flex mx-auto items-center justify-center rounded-lg h-10 sm:h-12 px-5 bg-[#39e079] text-[#122118] text-sm sm:text-base font-bold hover:bg-[#2fbb64] transition-all">
                Connect on Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
