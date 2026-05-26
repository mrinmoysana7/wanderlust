import { Compass, Home, Plane } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-25 left-25 w-75 h-75 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-30 right-30 w-87.5 h-87.5 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center shadow-2xl">
            <Plane className="w-14 h-14 text-cyan-400" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-black tracking-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Heading */}
        <h2 className="mt-6 text-3xl md:text-5xl font-bold">
          Lost In The Journey?
        </h2>

        {/* Description */}
        <p className="mt-5 text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Oops! The destination you are looking for does not exist or may have
          been moved. Lets guide you back to your next adventure.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link href="/">
            <button className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold shadow-lg shadow-cyan-500/20">
              <Home className="w-5 h-5" />
              Back To Home
            </button>
          </Link>

          <Link href="/destinations">
            <button className="flex items-center gap-2 px-7 py-3 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-semibold">
              <Compass className="w-5 h-5" />
              Explore Destinations
            </button>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-14 text-sm text-gray-500">
          Wanderlust © 2026 — Explore Beyond Limits
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
