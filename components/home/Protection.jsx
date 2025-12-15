import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Robust Threat Detection",
    desc: "Stay one step ahead of cyber criminals with our proactive solutions.",
    img: "/images/PlaceholderImage.png",
  },
  {
    title: "24/7 Monitoring",
    desc: "Continuous oversight to keep your systems secure around the clock.",
    img: "/images/PlaceholderImage2.png",
  },
  {
    title: "Tailored Security Solutions",
    desc: "Customized strategies designed to meet your unique security needs.",
    img: "/images/PlaceholderImage3.png",
  },
];

const CyberSecurityLanding = () => {
  return (
    <section className="bg-gray-50 py-20 xl:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Header Section */}
        <div className="text-center max-w-3xl mb-16">
          <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm mb-4">
            Why Choose Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Protecting Your Digital <br className="hidden md:block" />
            World with Confidence
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our cyber security services offer comprehensive protection against
            evolving threats. With cutting-edge technology and expert insights, we
            ensure your data remains safe.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
          >
            Try Us Out <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10"></div>
                <Image
                  src={feature.img}
                  alt={feature.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {feature.desc}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberSecurityLanding;
