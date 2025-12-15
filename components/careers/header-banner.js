import Link from "next/link";

export default function HeaderBanner() {
  return (
    <div className="relative w-full bg-gray-900 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 C 20 0 50 0 100 100 Z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Shape the Future of <br />
              <span className="text-green-500">Cybersecurity</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Join a team of passionate experts dedicated to protecting the digital world.
              At Cyethack, we offer more than just a job – we offer a pathway to innovate,
              grow, and make a real impact. Discover your potential with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/careers#job-openings"
                className="px-8 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
              >
                View Openings
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 to-transparent pointer-events-none"></div>
              <img
                src="/career/career.png"
                alt="Digital Network Globe"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
