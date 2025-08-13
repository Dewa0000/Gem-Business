import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    moNumber: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://gem-business.onrender.com";
    try {
      const res = await fetch(`${backendUrl}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: formData.username,
          email: formData.email,
          password: formData.password,
          moNumber: formData.moNumber,
        }),
      });
      if (!res.ok) throw new Error("Unable to load Resource");
      const data = await res.json();
      navigate("/login");
    } catch (err) {
      setError(`Error message: ${err.message}`);
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Create your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <input
              label="Username"
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="block w-full px-5 py-3 h-12 border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent hover:border-[var(--primary-color)] hover:shadow-lg placeholder:text-gray-500 placeholder:font-medium"
            />
            <input
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-5 py-3 h-12 border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent hover:border-[var(--primary-color)] hover:shadow-lg placeholder:text-gray-500 placeholder:font-medium"
            />
            <input
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-5 py-3 h-12 border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent hover:border-[var(--primary-color)] hover:shadow-lg placeholder:text-gray-500 placeholder:font-medium"
            />
            <input
              label="Mobile Number"
              id="mobile-number"
              name="moNumber"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Enter your mobile number"
              value={formData.moNumber}
              onChange={handleChange}
              className="block w-full px-5 py-3 h-12 border-2 border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent hover:border-[var(--primary-color)] hover:shadow-lg placeholder:text-gray-500 placeholder:font-medium"
            />
          </div>
          <button type="submit" className="button_primary">
            Sign Up
          </button>
        </form>
        <p className="mt-2 text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{" "}
          <Link to="/signin" className="font-medium text-[var(--primary-color)] hover:text-orange-500">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUpForm;