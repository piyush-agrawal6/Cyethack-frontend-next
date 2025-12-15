"use client";
import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ShieldCheck } from "lucide-react";

const partners = [
  { name: "IIT Kanpur", img: "/partner/IITK.png" },
  { name: "SIIC", img: "/partner/siic.webp" },
  { name: "Make in India", img: "/footer/min.png" },
  { name: "DSCI", img: "/partner/dsci.png" },
  { name: "NCOE", img: "/partner/nce.png" },
  { name: "BEL", img: "/partner/bel.png" },
  { name: "Microsoft", img: "/partner/Microsoft.png" },
  { name: "AWS", img: "/partner/aws.png" },
  { name: "Google", img: "/partner/google.jpg" },
  { name: "Chitkara University", img: "/partner/chitkra.png" },
];

const Partners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      scrollNext();
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [emblaApi, scrollNext]);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Header Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-green-100 rounded-full mb-6 border border-green-200">
            <ShieldCheck className="w-4 h-4 text-green-700 mr-2" />
            <span className="text-green-800 font-bold text-xs uppercase tracking-widest">Trusted Ecosystem</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Our Research Partners
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-medium">
            We collaborate with premier academic institutions, government bodies, and industry leaders to drive innovation in cybersecurity. These strategic partnerships empower us to stay ahead of emerging threats and define new standards for digital safety.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="overflow-hidden px-4" ref={emblaRef}>
          <div className="flex -ml-6 py-4"> {/* Added py-4 to accommodate hover lift */}
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_20%] pl-6 min-w-0"
              >
                <div className="group bg-white p-8 rounded-2xl h-40 flex items-center justify-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
