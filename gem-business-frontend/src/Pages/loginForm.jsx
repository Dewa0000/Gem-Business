import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const backendUrl =
      import.meta.env.VITE_BACKEND_URL ||
      "https://gem-business.onrender.com";
    try {
      const res = await fetch(`${backendUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#122118] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            {/* Image container */}
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-[#122118] @[480px]:rounded-lg min-h-[218px]"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkdDRTUXcmAnIV_CePb6clyz6ap2x1rtGTlCChFo5Qma0vTwTKfhviD28YWQRWiidFtf2cgeBOgqRngxP_sZVepFshAUdi8xLP13DazwVkBJUNDJuftY0lqgAg9ZkXS81vV-XDynzsmI0XbTalPOn0YI5q7xGM8bfKa1xml4VHq55QgOIncOPyjaCkG7SEypHNmdWhWsdv5RMvqY5vFvBagx-777L-LNVbpUYqlIP_VvJeCWGnLZdnkh3EGmQCqGWv_jOJ4T5gCCc")',
                  }}
                ></div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-white tracking-tight text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              Welcome Back to AETHELRED
            </h2>

            {/* Error message */}
            {error && (
              <p className="text-red-500 text-center px-4">{error}</p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Email */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Email Address
                  </p>
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#366347] bg-[#1b3124] focus:border-[#39e079] h-14 placeholder:text-[#96c5a8] p-[15px] text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
              </div>

              {/* Password */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-white text-base font-medium leading-normal pb-2">
                    Password
                  </p>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-[#366347] bg-[#1b3124] focus:border-[#39e079] h-14 placeholder:text-[#96c5a8] p-[15px] text-base font-normal leading-normal"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
              </div>

              {/* Forgot Password */}
              <p
                className="text-[#96c5a8] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline cursor-pointer"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </p>

              {/* Login Button */}
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#39e079] text-[#122118] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Log In</span>
                </button>
              </div>

              {/* Social login */}
              <p className="text-[#96c5a8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Or log in with
              </p>
              <div className="flex justify-center">
                <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
                  <button
                    type="button"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1b3124] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
                    onClick={() => alert("Google login not implemented")}
                  >
                    <span className="truncate">Continue with Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#1b3124] text-white text-sm font-bold leading-normal tracking-[0.015em] grow"
                    onClick={() => alert("Facebook login not implemented")}
                  >
                    <span className="truncate">Continue with Facebook</span>
                  </button>
                </div>
              </div>

              {/* Signup link */}
              <p
                className="text-[#96c5a8] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Don't have an account? Sign Up
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
