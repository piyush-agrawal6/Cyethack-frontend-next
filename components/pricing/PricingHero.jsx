import Link from "next/link";

export default function PricingHero() {
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

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                    Transparent Pricing for <br />
                    <span className="text-green-500">World-Class Security</span>
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                    Choose the plan that fits your security needs. From startups to enterprises,
                    we have a solution to protect your digital assets.
                </p>
            </div>
        </div>
    );
}
