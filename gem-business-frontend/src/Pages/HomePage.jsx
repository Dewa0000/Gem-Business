import React from "react";

const HomePage = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVC7jOHcUPE8YS_j2qZqsCSaJ2Pie137RFpiYmh28bydDmdBfS6zDzkFLh_ETyM-slpCS-TYYRXNaZej11ol9NP6wE3EZ9fZm5Vu3610r_oi6CH5rd0gECaJfWSTI8101Fsl1cnpilcaeIPNg6HZQ--w3Jdvs04hI6cOScsHiMxBnyXGqil7E3Pq7uz9WrOw3RQMhFnqeMlsetGEYaDlanO7Sx5TCsUcLDmFVpBvXrv5d3nLWt-azKQti60d4iIPraUgDl5qMo7OE")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Discover the Essence of Elegance
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Explore our curated collection of exquisite gems and jewelry, crafted with passion and precision.
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#39e079] text-[#122118] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Shop Now</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Collections */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Featured Collections
            </h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFS1r682k1pcx5wBwgMQ6Rhd3D6bIhZ7hHU9vVoEcf9MDuB2wSbPZOnRELs0o4fU8kYd8d29L0kNrC8wA8hq7VHc3SV2AqWbWo9Errlofz0MQ-PTSOMocKaDEOXfbdAlezCa8OB_-m1x4rLRdnSn0L67mWJ2dVlzOxXcMU1KS45sC9g4dczzfZVFEI69G2EqlFRz8BAhTbeYS04XA0CroucJniEse8fAtRUp3kTsNaL_WFXy3iYqeKvzW4IA5QXq4uPtbBVZYDj4I")',
                    }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Radiant Rings</p>
                    <p className="text-[#96c5a8] text-sm font-normal leading-normal">Explore our collection of handcrafted rings, perfect for any occasion.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkyId_A7-dWpHBWAzJaoKlCZ8verDi0MUYyAsLtHqdfQI39J9KTX1FWP_yLdN4Jc-DusiED5zFnVCIz6Fgvx3PVKE8daCGQ12xk-r2g-kgZ6mITuPEkeenM73mZV97pA7rb3n7Arc8iI9zPFZLcBlHoxzNSCgsdOnzYikfXBLV6TNqa2fYwup2hwhDFeqn60CCH5TKyPiFbWpwTnvfn11QRQgPtlQvAG1lsuyKBczrbZ4ZcY0Fm2XNxfrf3az4QNZcnHsT3gvPKjM")',
                    }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Elegant Necklaces</p>
                    <p className="text-[#96c5a8] text-sm font-normal leading-normal">Discover necklaces that capture the essence of sophistication and style.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZZmk2lZC6x80lPogjYXOyQcB2Pz5bI89yGX1k8iPjT8Y1tuB2vBSuP5L2zR-EczxSV5YObFFmFA3jAcjjWmpF8IxtCJQLnKv7f1zVhI7lmekwT6xpUg5koyWJa7ZRLW4CeEl1CQ8OmL6rP6RbYskPAmaJaffyjcbKPFz-Vx8qCgXusJNuKUbR-YzNW5z5LkTjan5XIy5yPDyd0LEaX0tRa-W0C0mlOHIMfB3jv5r2B96j_gY4vA8oN4oJmGmWwgXX6NA5zYfMn5U")',
                    }}
                  ></div>
                  <div>
                    <p className="text-white text-base font-medium leading-normal">Dazzling Earrings</p>
                    <p className="text-[#96c5a8] text-sm font-normal leading-normal">Find the perfect pair of earrings to complement your unique beauty.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exclusive Offer */}
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Exclusive Offer
                  </h1>
                  <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                    Sign up for our newsletter and receive 10% off your first purchase.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#39e079] text-[#122118] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                      <span className="truncate">Subscribe</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="@container">
              <div className="flex flex-col gap-10 px-4 py-10">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Our Story
                  </h1>
                  <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                    At Luxe Gems, we believe in the power of jewelry to express individuality and celebrate life's special moments. Our journey began with a passion for sourcing the
                    finest gems and crafting timeless pieces that resonate with elegance and sophistication.
                  </p>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#366347] bg-[#1b3124] p-4 flex-col">
                    <div className="text-white" data-icon="Diamond" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Exceptional Quality</h2>
                      <p className="text-[#96c5a8] text-sm font-normal leading-normal">We are committed to using only the highest quality materials and craftsmanship.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#366347] bg-[#1b3124] p-4 flex-col">
                    <div className="text-white" data-icon="Heart" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Ethical Sourcing</h2>
                      <p className="text-[#96c5a8] text-sm font-normal leading-normal">Our gems are ethically sourced, ensuring responsible and sustainable practices.</p>
                    </div>
                  </div>
                  <div className="flex flex-1 gap-3 rounded-lg border border-[#366347] bg-[#1b3124] p-4 flex-col">
                    <div className="text-white" data-icon="Sparkle" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-white text-base font-bold leading-tight">Timeless Designs</h2>
                      <p className="text-[#96c5a8] text-sm font-normal leading-normal">
                        Our designs are created to be cherished for generations, blending classic and contemporary styles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Favorites */}
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Customer Favorites
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBCooC60l_c_P9KIQ7HQ8qa17YkP-l1NSRNsZl3OayoLM7JqCuEpu8ET8QyJ9ODy3bI-uRb338jXYzViyJ2Sibo-WSjsHufSnwgRq5M6KkxiwPo2yeIEU0hQ66qkcRfVLea1XG6AvKPVVrq06gSTWEWvhX2aNC4c4H_I-z-qk1ZDcsrgGWeSytdbgkJvM_yU_ki-uayLYimID1gqnrga3zoDFgOkNtowADBUjf8J78QsYtCnCWcifiHwddueDl4I3ASdk6p3u5noE")',
                  }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Classic Diamond Stud Earrings</p>
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal">Timeless elegance for everyday wear.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBf8kdZYPVMrKOtBbEs5iOsCdQZtEBjI_gEzWVqbcvfWBJhzKRFWiRAIxsU8GUVa2CzshEd4ZgRsB5DS5z2e7ZHkHKAXaop3cZ-DOYhK7MjMGpKf-dVX2elhNvzllr5Fk6n5JidrgWRnF9N0rzYV93NURqDIzMcorF657ZzLlbFVrhpnFiIL97kRDPXtdNkWSoJtBuXmumTIDyOOV4TcpDs0yNhlk4yLtSRxU8PMC8dnXoXXL-ATkV_RXO7VbiLKuyHIIPnBhfyN3E")',
                  }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Sapphire and Diamond Pendant</p>
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal">A stunning centerpiece for any outfit.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVyX6DzQKzl5-ehKocBoQsJvOqRd0UWLR00J6s1JfH0RR-iak0IKhLPzbJG5vA2l9qcc2uBI34h8CUvFY9IDzjutHzJF4iE-97wDLEHtiZpMZ7NUBCcxGutFJrDCLX-RNzrE9CxepwDNPYLgcqwDEmw99N4UcEL2kAg1ctcYEyUQXP9_W7FDr4jdvQr2RTVvOybRjPadU6c6Ne6EoJQ6RcnF9uv1GSyUC4TNLYCPwYMTuuyl8eus8n4OdAYswTEgnN1L6zXzaXIR8")',
                  }}
                ></div>
                <div>
                  <p className="text-white text-base font-medium leading-normal">Ruby and Gold Ring</p>
                  <p className="text-[#96c5a8] text-sm font-normal leading-normal">A bold statement of style and sophistication.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;