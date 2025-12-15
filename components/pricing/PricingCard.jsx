import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingCard({ title, description, features, isPopular, buttonText = "Get a Quote" }) {
    return (
        <div className={`relative flex flex-col p-8 bg-white rounded-2xl border ${isPopular ? 'border-green-500 shadow-xl scale-105 z-10' : 'border-gray-200 shadow-sm hover:shadow-lg'} transition-all duration-300`}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                        Most Popular
                    </span>
                </div>
            )}

            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>

            <div className="flex-grow mb-8">
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="ml-3 text-gray-600 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-auto">
                <Link
                    href="/contact"
                    className={`w-full inline-flex justify-center items-center px-6 py-3 rounded-lg font-bold transition-all duration-200 ${isPopular
                            ? "bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-green-500/30"
                            : "bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200"
                        }`}
                >
                    {buttonText}
                    <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
