"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-25 left-25 w-75 h-75 bg-red-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-30 right-30 w-87.5 h-87.5 bg-orange-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl text-center relative z-10">
        {/* Error Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-red-500/10 border border-red-400/30 flex items-center justify-center shadow-2xl">
            <AlertTriangle className="w-14 h-14 text-red-400" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-black bg-linear-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
          Something Went Wrong
        </h1>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Oops! An unexpected error occurred while loading this page. Please try
          again or return to the homepage.
        </p>

        {/* Error Message */}
        {error?.message && (
          <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-red-300 break-all">
            {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-red-500 hover:bg-red-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-red-500/20"
          >
            <RefreshCcw className="w-5 h-5" />
            Try Again
          </button>

          <Link href="/">
            <button className="flex items-center gap-2 px-7 py-3 rounded-2xl border border-white/20 hover:border-red-400 hover:text-red-400 transition-all duration-300 font-semibold">
              <Home className="w-5 h-5" />
              Back To Home
            </button>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-14 text-sm text-gray-500">
          Wanderlust © 2026 — Travel Without Limits
        </p>
      </div>
    </section>
  );
};

export default ErrorPage;
