import Link from "next/link";

export default function ServicesHero() {
    return (
        <div className="relative w-full bg-gray-900 pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
            {/* Background Pattern & Image */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src="/images/world-globe.png"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                    Comprehensive <br />
                    <span className="text-green-500">Cybersecurity Solutions</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                    Protecting every layer of your digital infrastructure. From application security to compliance, we have you covered.
                </p>
            </div>
        </div>
    );
}
