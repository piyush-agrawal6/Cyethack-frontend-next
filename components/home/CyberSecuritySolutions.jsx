import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Lock, FileCheck, Clock, ArrowRight } from "lucide-react";

const CyberSecuritySolutions = () => {
  const features = [
    {
      title: "Threat Detection",
      desc: "Identify and neutralize threats before they impact your operations.",
      icon: Shield,
    },
    {
      title: "Data Protection",
      desc: "Ensure your sensitive information remains confidential and secure.",
      icon: Lock,
    },
    {
      title: "Compliance",
      desc: "Meet industry standards and regulatory requirements with ease.",
      icon: FileCheck,
    },
    {
      title: "24/7 Monitoring",
      desc: "Continuous oversight to keep your systems secure around the clock.",
      icon: Clock,
    },
  ];

  return (
    <section className="w-full bg-white py-20 xl:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Top Section: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-green-600 font-bold tracking-wider uppercase text-sm">
                Comprehensive Protection
              </h2>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Cyber Security <br />
                <span className="text-gray-400">Solutions for You</span>
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our expert services protect your digital assets from evolving
              threats. Trust us to safeguard your business with cutting-edge
              technology and proactive strategies.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src="/product/p1.png"
                alt="Cyber Security Dashboard"
                fill
                className="object-contain transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-50 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-green-600 transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CyberSecuritySolutions;
