import React from "react";

const AboutPage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* Our Story Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">
                Our Story
              </p>
            </div>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Gems & Jewellery by Shruti was founded in June 2025 by Shruti — a certified gemologist who completed her Diploma in Gems and Jewellery Design. 
              What began as a small vision to blend authenticity with artistry has now become a trusted name for natural gemstones, hallmarked jewellery, and timeless custom creations.
              Every piece we craft carries a story — one that celebrates individuality, trust, and the enduring beauty of fine craftsmanship.
            </p>
            <div className="flex w-full grow bg-[#1b3124] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#1b3124] @[480px]:gap-2 aspect-[3/2] rounded-lg flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKYkddL4Flt3hyfd74Jq4E8kpJkSXSgeZWAaug8bLVGdfDGJ4yOS4F2_RD_FOmIGavkfg5NfvNMfvh2fElL-F978J05bhMQH0sUiE2t8BXDc9OHhquaGUvESGPKgr_cC4xohBzr2xgat9MMEDQ2ChUj6ZOjFVHZGRo84ScT1mCKOwIX54vAi2MUXj9x3kLlOaVPPu3RkkgWiLz574r-Wmb2t3LKP50hba7j1X9mnoksO4I40PTt0QexyJb3xDAaOmf5Icw2URiQTM")`,
                  }}
                ></div>
              </div>
            </div>

            {/* Our Mission Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Mission
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Our mission is simple — to make premium jewellery accessible without compromising on quality or authenticity. 
              Every gemstone is 100% natural and certified from reputed gemological institutes. 
              From custom gold designs to personalized silver pieces, we focus on ethical sourcing, transparent pricing, and craftsmanship that stands the test of time.
            </p>

            {/* Our Values Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Values
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              At Gems & Jewellery by Shruti, we live by three values — Trust, Transparency, and Timeless Design.
              Every creation is made with integrity, every gem is verified, and every client interaction is built on honesty.
              Our hallmark jewellery reflects precision, purity, and passion — qualities that define who we are.
            </p>

            {/* Meet the Founder Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Meet the Founder
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Shruti, the founder and certified gemologist behind GJS, brings expertise, elegance, and an eye for detail to every design. 
              With formal training in Gems and Jewellery Design and years of hands-on experience, she blends traditional Indian artistry with modern minimalism — crafting pieces that are both premium and personal.
            </p>

            {/* Our Commitment Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Commitment
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              We are committed to delivering jewellery that you can trust and treasure. 
              From natural gemstones to hallmarked gold and silver, every creation is authenticated and handcrafted with care.
              At Gems & Jewellery by Shruti, beauty meets integrity — because you deserve jewellery that’s as real and radiant as you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
