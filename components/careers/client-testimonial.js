export default function ClientTestimonial() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-20 max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl py-8 sm:py-12">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <img
            src="/images/Placeholder Logo.png"
            alt="Webflow Logo"
            className="w-20 h-8 sm:w-[140px] sm:h-[56px] object-contain"
          />
        </div>
        <blockquote className="text-base sm:text-lg md:text-xl text-gray-700 font-bold mb-6 sm:mb-8">
          "The team at this cyber security company transformed our security
          posture. Their commitment to dedication and protection is unmatched."
        </blockquote>

        <div className="flex flex-col items-center">
          {/* Client image placeholder - will be replaced with actual image */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full mb-2"></div>
          <div className="text-center">
            <p className="font-bold text-black text-sm sm:text-base">Jane Doe</p>
            <p className="text-xs sm:text-sm text-black mt-1">CISO, TechCorp</p>
          </div>
        </div>
      </div>
    </div>
  );
}
