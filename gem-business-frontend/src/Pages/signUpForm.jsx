// src/components/SignUpForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import Button from "./Button";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    moNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log("Form submitted:", formData);
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
            <InputField
              label="Username"
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            <InputField
              label="Email address"
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <InputField
              label="Mobile Number"
              id="mobile-number"
              name="moNumber"
              type="tel"
              autoComplete="tel"
              required
              placeholder="Enter your mobile number"
              value={formData.moNumber}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="button_primary">
            Sign Up
          </Button>
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