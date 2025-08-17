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
              Founded in 2010 by Sarah and David, Gemstone Creations began as a small workshop fueled by a passion for unique gemstones and exquisite craftsmanship. Our journey
              started with a simple vision: to create jewelry that not only adorns but also tells a story, reflecting the beauty and individuality of each wearer.
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
              At Gemstone Creations, our mission is to provide exceptional quality and design in every piece of jewelry we create. We are committed to ethical sourcing, ensuring
              that all our materials are obtained responsibly and sustainably. Our dedication to craftsmanship and customer satisfaction drives us to exceed expectations and create
              lasting treasures.
            </p>
            <div className="flex w-full grow bg-[#1b3124] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#1b3124] @[480px]:gap-2 aspect-[3/2] rounded-lg flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCB6f5Ch2XlVYO_dvGGcwe_bvCLt_y9x59ZxF8ueQj5rifZFaihuMkwDkb8ubUguoCL5G1O7T-91UJ8ntNAZgQTehg68ICp-xVWHspiQSKyH-TYjWNn7QM9QP_H6Tl0YuiC_zDCYDnuDhozwq-vMyfyjemyg-1BkiVVVVS10JP_pv4ovQzfOc9Lveo5KJm51gERJDie7BMT3sP3KKEaqY7rLA68aK8lcUzxstXHsr9hKr0gA1Ecxt9gUj67lmla1-kaxT8Cf6U_mWY")`,
                  }}
                ></div>
              </div>
            </div>

            {/* Our Values Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Values
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Integrity, quality, and creativity are the cornerstones of our brand. We believe in transparency and honesty in all our dealings, from sourcing to sales. Our
              commitment to quality means that every gemstone is carefully selected, and every piece of jewelry is meticulously crafted. We embrace creativity and innovation,
              constantly exploring new designs and techniques to bring unique and beautiful jewelry to our customers.
            </p>
            <div className="flex w-full grow bg-[#1b3124] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#1b3124] @[480px]:gap-2 aspect-[3/2] rounded-lg flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_OtgSv-e90jCBg6B3bGahdU6veXeta2hYqh1GG8_TBHVp0EEMt75U5tobz_7wx-bEJ0foF1G_rlcFZfyI7oLX4AamNDTS3zzlf-Uucr2BJ_qclEAuP1UeADGT2HS_dN-EJtjHRd5JPz-WQog2sMxjLvjkk-ij0VfS1eWTmHZ__uh8RxCRPE1NaL--aSKGzLmhvUcxy31Bu6riu-pVAq3RfuLRP3nrXPePU72Z42_R8REq761oLjm3go43Ky8yqmwfIr6R11Mpew")`,
                  }}
                ></div>
              </div>
            </div>

            {/* Meet the Founders Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Meet the Founders
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Sarah, with her background in gemology, brings a deep understanding of gemstones and their unique properties. David, a master jeweler, combines traditional techniques
              with modern design to create stunning pieces. Together, they lead a team of skilled artisans who share their passion and dedication.
            </p>
            <div className="flex w-full grow bg-[#1b3124] @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-[#1b3124] @[480px]:gap-2 aspect-[2/3] rounded-lg grid grid-cols-[1fr_1fr] grid-rows-[2fr_1fr_1fr]">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZRJBFOLZCKj5QjTWoRcwwz_459opybkNqjtEsg5WRERrtXVHCQokdP8Nu8phpeVVOJIcXJLvdzse32giDxAOe46vSAx3eSvrFApFvrT2c6D13Wsqqoctw0y0q4gdMTOx6TjvHfJCwm9bJ232C7drens78Tzvc1NOsutkqrspzdPVyolHWNE0jKPyhmgv89qbtW4xoTygHbuwZRoLSpeIlS7HqMmX2AgRyDOUjUnSyE2WpMXVH_GxcsD0VJqgFVpzf_BiXCpumuj8")`,
                  }}
                ></div>
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none col-span-2 row-span-2"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuChq2f6PB5fx5oKmSNZkjB5MMcY3SV-FHSzE_BXgI4wqLZRRmb-R0MtEE3qttiHwocAs1vBDqSQxWiy6gbYmh0uBiuhLSwcf53OcThl9EhUx5l7btrBskV4mgTXjRePkqMIa8pzDIERDbRR5aQ_F5OfrXvGp9JA6RMzgBcyJ1cXKwPsJI-Gjrfqk1vK7y5aQmPjNnX-rg-7in96DVx24J8bR-vd-Mg7Vh4sUfBS2RRyGLEbmrmmvI9lVAzdQQl07CDPK1QInMH0DL0")`,
                  }}
                ></div>
              </div>
            </div>

            {/* Our Commitment Section */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Commitment
            </h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              We are committed to providing exceptional customer service and ensuring that every customer is delighted with their purchase. Our jewelry is more than just an
              accessory; it's a reflection of personal style and a celebration of life's special moments. We invite you to explore our collections and discover the perfect piece
              that speaks to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;