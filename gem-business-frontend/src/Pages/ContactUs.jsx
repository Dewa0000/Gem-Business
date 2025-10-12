import React from "react";

const ContactUsPage = () => {
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
                Contact Us
              </h1>
              <p className="text-[#c5dceb] text-sm sm:text-base mt-2 leading-relaxed max-w-[600px] mx-auto">
                Reach out to Gems by Shruti for inquiries, consultations, or custom designs. We’re here to assist you!
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mb-10">
              <div className="flex-1 bg-[#1b3124] rounded-lg p-6 border border-[#366347]">
                <h2 className="text-[#96c5a8] text-xl sm:text-2xl font-bold mb-4">Our Location</h2>
                <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed">
                  LIG 92, Sector 1, <br />
                  Housing Board Colony, Saddu, <br />
                  Raipur, Chhattisgarh 492001
                </p>
                <h2 className="text-[#96c5a8] text-xl sm:text-2xl font-bold mt-6 mb-4">Contact Details</h2>
                <p className="text-[#e8f3ec] text-sm sm:text-base leading-relaxed">
                  Email: info@gemsbyshruti.com <br />
                  Phone: +91-123-456-7890 <br />
                  Instagram: @gems_n_jewelleryby_shruti
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="flex-1 rounded-lg overflow-hidden">
                <iframe
                  title="Gems by Shruti Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.123456!2d81.6337!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDE1JzQ0LjQiTiA4McKwMzgnMDcuNCJF!5e0!3m2!1sen!2sin!4v1697100000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1b3124] rounded-lg p-6 border border-[#366347] mb-10">
              <h2 className="text-[#96c5a8] text-xl sm:text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="text-[#e8f3ec] text-sm sm:text-base block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-[#122118] text-white border border-[#366347] focus:outline-none focus:ring-2 focus:ring-[#96c5a8]"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-[#e8f3ec] text-sm sm:text-base block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-[#122118] text-white border border-[#366347] focus:outline-none focus:ring-2 focus:ring-[#96c5a8]"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-[#e8f3ec] text-sm sm:text-base block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-3 rounded-lg bg-[#122118] text-white border border-[#366347] focus:outline-none focus:ring-2 focus:ring-[#96c5a8] h-32 resize-none"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-lg h-10 sm:h-12 px-5 bg-[#96c5a8] text-white text-sm sm:text-base font-bold hover:bg-[#a0d1b9] transition-colors mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Footer Note */}
            <p className="text-[#c5dceb] text-sm sm:text-base text-center">
              We typically respond within 24-48 hours. For urgent inquiries, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;