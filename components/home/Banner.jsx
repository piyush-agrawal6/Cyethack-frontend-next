import { Headset, MoveRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

const CyberSecurityBanner = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Video Background */}
      <div className="absolute inset-0 flex md:items-center md:justify-center pt-[70px] md:pt-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[40%] md:w-[70%] md:h-[70%] object-cover md:object-contain"
        >
          <source src="/banner/bannerbg2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1450px] mx-auto min-h-screen flex flex-col justify-end md:justify-between px-6 md:px-4 py-[80px] md:py-[140px]">
        {/* Top Left */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-[46px] text-[#3DA64D]">
            Cyethack
          </h1>
          <h2 className="text-[#C1C1C1] mt-6 text-xl sm:text-2xl md:text-[46px]">
            Your Digital Fortress
          </h2>
        </div>

        {/* Bottom Right */}
        <div className="text-center md:text-left max-w-[600px] self-center md:self-end mt-8 md:mt-0">
          <p className="text-[#808080] text-[18px] sm:text-base md:text-lg leading-relaxed mb-6">
            At the forefront of cybersecurity, we protect your online presence
            with cutting-edge technology and expert solutions. Our dedicated
            team is committed to ensuring your safety in an ever-evolving
            digital landscape.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white 
             bg-[#3DA64D] hover:bg-green-600 hover:scale-102 hover:shadow-lg
             transition-all duration-300 ease-in-out rounded-sm outline-none border-none justify-center"
            >
              CyeNet VMDR <MoveRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityBanner;
