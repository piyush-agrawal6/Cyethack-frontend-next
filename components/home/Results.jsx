import React from "react";
import Image from "next/image";

const Results = () => {
  const stats = [
    {
      value: "98%",
      label: "Client Retention Rate",
      desc: "Our clients trust us year after year.",
    },
    {
      value: "95%",
      label: "Threat Mitigation",
      desc: "Successful threat mitigations in the last year.",
    },
    {
      value: "24/7",
      label: "Active Monitoring",
      desc: "Round-the-clock security surveillance.",
    },
    {
      value: "500+",
      label: "Secured Assets",
      desc: "Digital assets protected globally.",
    },
  ];

  return (
    <section className="bg-white py-20 xl:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Text Content */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <span className="text-green-600 font-bold tracking-wider uppercase text-sm">
              Proven Results
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Our Success Metrics <br />
              <span className="text-gray-500">Speak for Themselves</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Our clients experience unparalleled security and peace of mind. With
              a 98% satisfaction rate, we prioritize your safety above all else.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <h3 className="text-lg font-bold text-green-600">
                  {stat.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 w-full flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-30 transform translate-x-10 translate-y-10"></div>
            <Image
              src="/images/Placeholder.png"
              alt="Cyber Security Illustration"
              width={500}
              height={500}
              className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;