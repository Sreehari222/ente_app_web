"use client";

import Link from "next/link";
import { useState } from "react";

const SigninPage = () => {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Invalid credentials");
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setSuccess("Login successful!");
    } catch (error) {
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-[180px] lg:pb-28">
      <div className="container px-4">
        <div className="mx-auto max-w-[420px] rounded bg-white px-4 py-6 shadow-three dark:bg-dark sm:px-6 sm:py-8 lg:max-w-[500px] lg:px-10 lg:py-10">

          {/* Title */}
          <h3 className="mb-2 text-center text-xl font-bold text-black dark:text-white sm:text-2xl">
            Sign in
          </h3>

          <p className="mb-5 text-center text-sm text-body-color sm:text-base">
            Login using your email or phone number
          </p>

          {/* Error */}
          {error && (
            <div className="mb-3 rounded bg-red-100 px-3 py-2 text-xs text-red-700 sm:text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {success && (
            <div className="mb-3 rounded bg-green-100 px-3 py-2 text-xs text-green-700 sm:text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-4">
              <label className="mb-1 block text-xs text-dark dark:text-white sm:text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-sm border bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:bg-[#2C303B] sm:px-6 sm:py-3 sm:text-base"
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="mb-1 block text-xs text-dark dark:text-white sm:text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full rounded-sm border bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:bg-[#2C303B] sm:px-6 sm:py-3 sm:text-base"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="mb-1 block text-xs text-dark dark:text-white sm:text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full rounded-sm border bg-[#f8f8f8] px-4 py-2 text-sm outline-none focus:border-primary dark:bg-[#2C303B] sm:px-6 sm:py-3 sm:text-base"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center rounded-sm bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary/90 disabled:opacity-60 sm:px-9 sm:py-4 sm:text-base"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-4 text-center text-xs text-body-color sm:text-base">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
};

export default SigninPage;
