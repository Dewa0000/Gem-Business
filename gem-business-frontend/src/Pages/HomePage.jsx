import React from "react";

const HomePage = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#122118] to-[#1b3124] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-full sm:max-w-[960px] w-full flex-1">
            {/* Hero Section */}
            <div className="rounded-lg overflow-hidden mb-6">
              <div className="relative min-h-[400px] sm:min-h-[480px] bg-cover bg-center bg-no-repeat p-4 sm:p-6"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVC7jOHcUPE8YS_j2qZqsCSaJ2Pie137RFpiYmh28bydDmdBfS6zDzkFLh_ETyM-slpCS-TYYRXNaZej11ol9NP6wE3EZ9fZm5Vu3610r_oi6CH5rd0gECaJfWSTI8101Fsl1cnpilcaeIPNg6HZQ--w3Jdvs04hI6cOScsHiMxBnyXGqil7E3Pq7uz9WrOw3RQMhFnqeMlsetGEYaDlanO7Sx5TCsUcLDmFVpBvXrv5d3nLWt-azKQti60d4iIPraUgDl5qMo7OE")',
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center gap-4 sm:gap-6">
                  <h1 className="text-[#96c5a8] text-3xl sm:text-5xl font-extrabold leading-tight tracking-[-0.02em]">
                    GJS — Gems & Jewellery by Shruti
                  </h1>
                  <h2 className="text-white text-sm sm:text-base font-normal leading-relaxed max-w-[600px] mx-auto">
                    Certified by Experts, Loved by You. Discover timeless creations
                    crafted with 100% Natural Gemstones, CIG Certification, and unmatched elegance.
                  </h2>
                  <button
                    className="flex min-w-[120px] items-center justify-center rounded-lg h-10 sm:h-12 px-5 bg-[#96c5a8] text-white text-sm sm:text-base font-bold tracking-wide hover:bg-[#a0d1b9] transition-colors"
                    onClick={() => window.location.href = "/products"}
                  >
                    Explore Collection
                  </button>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="flex flex-col text-center gap-4 sm:gap-6 py-10">
              <h2 className="text-[#96c5a8] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.015em]">
                Where Purity Meets Perfection
              </h2>
              <p className="text-[#c5dceb] text-sm sm:text-base font-normal leading-relaxed max-w-[700px] mx-auto">
                At GJS, every piece is a story — handcrafted with precision, authenticity, and a promise of trust.
                From ethically sourced diamonds to certified gemstones, we bring you jewellery that’s elegant,
                meaningful, and forever.
              </p>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 py-6">
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
                  className="rounded-lg border border-[#366347] bg-[#1b3124] p-4 sm:p-6 text-[#e8f3ec] text-sm sm:text-base"
                >
                  {text}
                </div>
              ))}
            </div>

            {/* Featured Collections */}
            <h2 className="text-[#96c5a8] text-[18px] sm:text-[22px] font-bold tracking-[-0.015em] px-4 pb-3 pt-8">
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
              <h1 className="text-[#96c5a8] text-2xl sm:text-4xl font-bold leading-tight tracking-[-0.02em]">
                Our Craftsmanship Promise
              </h1>
              <p className="text-[#c5dceb] text-sm sm:text-base leading-relaxed max-w-[700px] mx-auto">
                Each GJS creation is born from a legacy of craftsmanship and care.
                Every diamond is handpicked, every gemstone is ethically sourced,
                and every design is perfected to make you feel as special as the piece itself.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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
              <h2 className="text-[#96c5a8] text-2xl sm:text-3xl font-bold leading-tight">
                Visit Us in Raipur (C.G)
              </h2>
              <p className="text-[#c5dceb] text-sm sm:text-base mt-3 mb-5">
                DM us on Instagram for gemstone consultations or to craft your custom design.  
                Let’s create something that’s truly yours.
              </p>
              <button
                className="flex mx-auto items-center justify-center rounded-lg h-10 sm:h-12 px-5 bg-[#96c5a8] text-white text-sm sm:text-base font-bold hover:bg-[#a0d1b9] transition-colors"
                onClick={() => window.open("https://www.instagram.com/gems_n_jewelleryby_shruti/", "_blank")}
              >
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