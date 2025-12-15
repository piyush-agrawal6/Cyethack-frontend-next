import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const UnderstandingBanner = () => {
  const steps = [
    {
      title: "Assessment",
      desc: "We begin by evaluating your current security posture to identify vulnerabilities.",
      step: "01",
    },
    {
      title: "Strategy",
      desc: "Next, we create a tailored strategy to enhance protection and mitigate risks.",
      step: "02",
    },
    {
      title: "Implementation",
      desc: "Our team implements the agreed-upon security solutions with precision.",
      step: "03",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 xl:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center gap-16">

          {/* Header */}
          <header className="max-w-3xl space-y-6">
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Understanding Our <br />
              <span className="text-gray-400">Cyber Security Solutions</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our services are designed to protect your digital assets. We provide
              comprehensive solutions tailored to meet your unique security needs through a proven methodology.
            </p>
          </header>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8 w-full relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>

            {steps.map((step, i) => (
              <article key={i} className="relative group">
                <div className="flex flex-col items-center text-center gap-6 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:bg-gray-800 hover:border-green-500/50 transition-all duration-300">
                  {/* Step Number */}
                  <div className="w-24 h-24 rounded-full bg-gray-900 border-4 border-gray-800 group-hover:border-green-500 transition-colors duration-300 flex items-center justify-center shadow-xl">
                    <span className="text-3xl font-bold text-gray-700 group-hover:text-green-400 transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="px-8 py-3 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-green-500/25"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingBanner;
