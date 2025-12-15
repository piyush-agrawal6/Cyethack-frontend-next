export default function CompanyPartners() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 xl:px-20 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#000000] mb-4 md:mb-0 font-bold text-center md:text-left text-base sm:text-lg">
          Trusted by industry leaders worldwide
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          {[1, 2, 3].map((_, index) => (
            <img
              key={index}
              src="/images/Placeholder Logo.png"
              alt="Partner Logo"
              className="w-24 h-8 sm:w-[140px] sm:h-[56px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
